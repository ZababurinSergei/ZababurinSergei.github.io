import dotenv from "dotenv"
dotenv.config();
import { FINDER } from "../../../db/connect/index.mjs";
import { len, max } from '../index.mjs'

const CONTEXT = [`${process.env.PUBLIC_URL}/ld/conceptnet${process.env.CONCEPT_VERSION}/context.ld.json`]
const CONCEPTNET = `${process.env.PUBLIC_URL}`
const CONCEPTNET_DOCS = `${process.env.PUBLIC_URL}/docs`
const VALID_KEYS = ['rel', 'start', 'end', 'node', 'other', 'source', 'uri']
const VERSION = "5.8.1"
const success = (response) => {
    response['version'] = VERSION
    return response
}
const error = (response, status, details) => {
    response['version'] = VERSION
    response['error'] = {'status': status, 'details': details}
    return response
}

const lookup_single_assertion = () => {

}
const make_query_url = (url, items) => {
    let str_items = []
    for(let i =0 ; i< items.length; ++i) {
        let property = ''
        if(items[i].hasOwnProperty('offset')) {
            str_items.push(`offset=${items[i].offset}`)
        } else if(items[i].hasOwnProperty('limit')) {
            str_items.push(`limit=${items[i].limit}`)
        }

    }

    if(!str_items) {
        return url
    } else {
        return url + "?" + str_items.join("&");
    }
}

const paginated_url = (url, params, offset, limit, more) => {
    /**
     Take in a URL and set 'offset=' and 'limit=' parameters on its query string,
     replacing those parameters if they already existed.
     */

    let new_params = []

    if(offset >= 0) {
        new_params.push({offset: offset})
    }

    if(limit) {
        new_params.push({limit: limit})
    }
    return make_query_url(url, new_params)
}
const make_paginated_view = (url, params, offset, limit, more) => {
    /**
     Create a JSON-LD structure that describes the fact that this is just
     one page of results and more pages exist.

     This follows what used to be the recommendation at
     https://www.w3.org/community/hydra/wiki/Pagination. It now sort of resembles
     the "PartialCollectionView" proposal. This stuff is still not
     well-standardized.
     */
    let prev_offset = {}
    let next_offset = {}
    let pager = {}

    prev_offset = max(0, offset - limit)
    next_offset = offset + limit
    pager = {
        '@id': paginated_url(url, params, offset, limit),
        '@type': 'PartialCollectionView',
        'firstPage': paginated_url(url, params, 0, limit),
        'paginatedProperty': 'edges',
    }

    if(offset > 0) {
        pager['previousPage'] = paginated_url(url, params, prev_offset, limit)
    }

    if(offset <= 0) {
        pager['nextPage'] = paginated_url(url, params, next_offset, limit)
        pager['comment'] = (
            "There are more results. Follow the 'nextPage' link for more."
        )
    }

    return pager
}
const lookup_grouped_by_feature = () => {

}

const query_relatedness = (node1, node2) => {
    /**
     Query for the similarity between node1 and node2. Return the cosine
     similarity between the vectors of these two terms.
     */
    if(!node1 || !node2) {
        return error({}, 400, 'Arguments should be called node1 and node2.')
    }
    const url = make_query_url('/relatedness', [{'node1': node1}, {'node2': node2}])
    try {
        const relatedness = VECTORS.get_similarity({
            get_vector: (query, oov_vector= true) => {
                /**
                 Given one of the possible types of queries (see `similar_terms`), make
                 a vector to look up from it.

                 If there are 5 or fewer terms involved and `oov_vector=True`, this
                 will allow expanded_vector to use an out-of-vocab strategy to find missing
                 terms.
                 */
                /*
                if isinstance(query, np.ndarray):
                    return query
                elif isinstance(query, pd.Series) or isinstance(query, dict):
                    terms = list(query.items())
                elif isinstance(query, pd.DataFrame):
                    terms = list(query.to_records())
                elif isinstance(query, str):
                    terms = [(query, 1.)]
                elif isinstance(query, list):
                    terms = query
                else:
                    raise ValueError("Can't make a query out of type %s" % type(query))

                cache_key = tuple(terms + [oov_vector])
                if cache_key in self.cache:
                    return self.cache[cache_key]

                oov_vector = oov_vector and (len(terms) <= 5)

                vec = self.expanded_vector(terms, oov_vector=oov_vector)
                self.cache[cache_key] = normalize_vec(vec)
                return self.cache[cache_key]
                 */
            }
        },node1, node2)
        let response = {'@id': url, 'value': Math.round(parseFloat(relatedness), 3)}
        return success(response)
    } catch (e) {
        return error(
            {'@id': url},
            400,
            "Couldn't look up {} or {} (or both).".format(repr(node1), repr(node2)),
        )
    }
}
const query_paginated = (query, offset=0, limit=50)=> {
    return  new Promise(async (resolve, reject) => {
        /**
         Search ConceptNet for edges matching a query.

         The query should be provided as a dictionary of criteria. The `query`
         function in the `.api` module constructs such a dictionary.
         */

        let found = await FINDER.query(query, parseInt(limit, 10) + 1, offset)
        let edges = [...found];
        let data = []
        for(let key in query) {
            data.push(query[key])
        }
        edges.splice(limit)
        let response = {
            '@id': make_query_url('/query', data),
            'edges': edges
        }

        const more = len(found) > len(edges)
        if (more || offset !== 0) {
            response['view'] = make_paginated_view('/query', data, offset, limit, more)
        }

        return resolve(success(response))
    })
}

const lookup_paginated = (term, offset=0, limit=50) => {
    return  new Promise(async (resolve, reject) => {
        let found = await FINDER.lookup(term, parseInt(limit, 10) + 1, offset)
        let edges = [...found];
        edges.splice(limit)
        let response = {
            '@context': CONTEXT,
            '@id': term,
            'edges': edges
        }
        const more = len(found) > len(edges)
        if (more || offset !== 0) {
            response['view'] = make_paginated_view(term, {}, offset, limit, more)
        }

        if(!found) {
            return resolve(error(response, 404, '%r is not a node in ConceptNet.' % term))
        } else {
            return resolve(success(response))
        }
    })
}
export default {
    CONTEXT: CONTEXT,
    CONCEPTNET: CONCEPTNET,
    CONCEPTNET_DOCS: CONCEPTNET_DOCS,
    VALID_KEYS: VALID_KEYS,
    lookup_grouped_by_feature: lookup_grouped_by_feature,
    lookup_single_assertion: lookup_single_assertion,
    lookup_paginated: lookup_paginated,
    query_paginated: query_paginated,
    query_relatedness: query_relatedness
}