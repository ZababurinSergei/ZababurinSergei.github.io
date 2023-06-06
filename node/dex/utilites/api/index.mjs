import dotenv from "dotenv"
dotenv.config();
import { FINDER } from "../../db/connect/index.mjs";
import { len, max } from '../python/index.mjs'

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

const query_paginated = (query, offset=0, limit=50) => {
    return  new Promise(async (resolve, reject) => {
        /**
         Search ConceptNet for edges matching a query.

         The query should be provided as a dictionary of criteria. The `query`
         function in the `.api` module constructs such a dictionary.
         */
        let found = FINDER.query(query, limit + 1, offset)
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
    lookup_paginated: lookup_paginated
}