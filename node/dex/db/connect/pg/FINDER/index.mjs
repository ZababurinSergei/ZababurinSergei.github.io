import {gin_jsonb_value, GIN_QUERY_2WAY, GIN_QUERY_1WAY} from '../index.mjs'
import {transform_for_linked_data} from "../../../../utilites/edges/index.mjs";

const ValueError = (message) => {

    console.log('message error: ', message)
}

const query = async (self, criteria, limit=20, offset=0) => {
    /**
     The most general way to query based on a set of criteria.
     */
    const cursor = self.connection.cursor()
    let results = {}
    let data = []
    if(criteria.hasOwnProperty('node')) {
        const query_forward = gin_jsonb_value(criteria, true)
        const query_backward = gin_jsonb_value(criteria, false)
        const [result, metadata] = await cursor.execute(
            GIN_QUERY_2WAY,
            {
                'query_forward': JSON.stringify(query_forward),
                'query_backward': JSON.stringify(query_backward),
                'limit': limit,
                'offset': offset,
            },
        )

        results = result
    } else {
       let query = gin_jsonb_value(criteria)
        const [result, metadata] = await  cursor.execute(
            GIN_QUERY_1WAY,
            {'query': JSON.stringify(query), 'limit': limit, 'offset': offset},
        )

        results = result
    }

    for(let item of results) {
        data.push(transform_for_linked_data(item.data))
    }

    return data
}
const lookup = async (self, uri, limit=100, offset=0) => {
    let criteria = {}
    if(uri.startsWith('/c/') || uri.startsWith('http')) {
        criteria = {'node': uri}
    } else if(uri.startsWith('/r/')) {
        criteria = {'rel': uri}
    } else if(uri.startsWith('/s/')) {
        criteria = {'source': uri}
    } else if(uri.startsWith('/d/')) {
        criteria = {'dataset': uri}
    } else if(uri.startsWith('/a/')) {
        return self.lookup_assertion(uri)
    } else {
        ValueError(`${uri} isn't a ConceptNet URI that can be looked up`)
    }
    return self.query(criteria, limit, offset)
}

const FINDER = {
    lookup: lookup,
    query: query
}


export { FINDER }
export default FINDER