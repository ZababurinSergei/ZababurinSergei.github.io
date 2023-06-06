import {Sequelize, DataTypes} from "sequelize";
import Models from '../../models/pg/init-models.mjs';
import { FINDER } from './FINDER/index.mjs'
import { jsonify } from '../../../utilites/json_rendering.mjs';
import {transform_for_linked_data} from '../../../utilites/edges/index.mjs'

let LIST_QUERIES = {}
let FEATURE_QUERIES = {}

export const  NODE_TO_FEATURE_QUERY = (props) => {
    const { node, limit } = props

    return `
        SELECT rf.direction, r.uri, e.data
        FROM ranked_features rf, edges e, relations r
        WHERE rf.node_id = (SELECT n.id FROM nodes n where n.uri=${node})
        AND rf.edge_id = e.id
        AND rf.rel_id = r.id
        AND rank <= ${limit}
        ORDER BY direction, uri, rank;
    `
}

export const  GIN_QUERY_1WAY = (props) => {
    const { query, offset, limit } = props

    return `
        WITH matched_edges AS (
            SELECT edge_id FROM edges_gin
            WHERE data @> '${query}'
            LIMIT 10000
            )
        SELECT e.uri, e.data, e.weight
        FROM matched_edges m, edges e
        WHERE m.edge_id = e.id
        ORDER BY weight DESC
        OFFSET ${offset} LIMIT ${limit};
`}

export const GIN_QUERY_2WAY = (props) => {
    const { query_forward, query_backward, offset, limit } = props
    return `
        WITH matched_edges AS (
            SELECT edge_id FROM edges_gin
            WHERE data @> '${query_forward}' OR data @> '${query_backward}'
            LIMIT 10000
            )
        SELECT e.uri, e.data, e.weight
        FROM matched_edges m, edges e
        WHERE m.edge_id = e.id
        ORDER BY weight DESC
        OFFSET ${offset} LIMIT ${limit};
`}

export const gin_jsonb_value = (criteria, node_forward= true) => {
    let criteria_map = {
        'start': 'start',
        'end': 'end',
        'rel': 'rel',
        'dataset': 'dataset',
        'source': 'sources',
        'sources': 'sources',
    }

    if(node_forward) {
        criteria_map['node'] = 'start'
        criteria_map['other'] = 'end'
    } else {
        criteria_map['node'] = 'end'
        criteria_map['other'] = 'start'
    }
    let query = {}
    for(let key in criteria_map) {
        const criterion_in = key
        const criterion_out = criteria_map[key]
        if(criteria.hasOwnProperty(criterion_in)) {
            console.assert(typeof criteria[criterion_in] === 'string', 'тип должен быть  string')
            query[criterion_out] = [criteria[criterion_in]]
        }
    }

    return query
}
const lookup_assertion = () => {}
const query = async (self, criteria, limit = 20, offset = 0) => {
   const cursor = self.connection.cursor()
   let results = []
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
        const query = gin_jsonb_value(criteria)
        const [result, metadata] = await cursor.execute(
            GIN_QUERY_1WAY,
            {'query': JSON.stringify(query), 'limit': limit, 'offset': offset},
        )

        results = result
    }

    let data = []

    for(let item of results) {
        data.push(transform_for_linked_data(item.data))
    }

    return data
}

export default async () => {
    try {
        const sequelize = new Sequelize(
            'conceptnet5',
            'postgres',
            'A+ab763M_8',
            {
                host: 'localhost',
                port: '5432',
                dialect: 'postgres'
            }
        );

        await sequelize.authenticate()
        const models = Models(sequelize)

        return {
            lookup: ( uri, limit=100, offset=0) => FINDER.lookup( {
                lookup_assertion: lookup_assertion,
                query: (criteria, limit=20, offset=0) => query({
                    connection: {
                        cursor: () => {

                            return {
                                fetchall: (...args) => {
                                    console.log('fetchall', args)
                                },
                                execute: async (sql, props) => {
                                    return await sequelize.query(sql(props));
                                }
                            }
                        }
                    }
                }, criteria, limit, offset)
            }, uri, limit, offset),
            query: (criteria, limit, offset) =>  {
                return FINDER.query({
                    connection: {
                        cursor: () => {
                            return {
                                fetchall: (...args) => {
                                    console.log('fetchall', args)
                                },
                                execute: async (sql, props) => await sequelize.query(sql(props))
                            }
                        }
                    }
                }, criteria, limit, offset)
            }
        }
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
        return {
            lookup: ( uri, limit=100, offset=0) => FINDER.lookup( {
                lookup_assertion: lookup_assertion,
                query: (criteria, limit=20, offset=0) => query({
                    connection: {
                        cursor: () => {

                            return {
                                fetchall: (...args) => {

                                },
                                execute: async (sql, props) => {
                                    return [[
                                        {
                                            "uri": "/a/[/r/CausesDesire/,/c/en/love/,/c/en/kiss/]",
                                            "data": {
                                                "end": "/c/en/kiss",
                                                "rel": "/r/CausesDesire",
                                                "uri": "/a/[/r/CausesDesire/,/c/en/love/,/c/en/kiss/]",
                                                "start": "/c/en/love",
                                                "weight": 9.38083151964686,
                                                "dataset": "/d/conceptnet/4/en",
                                                "license": "cc:by/4.0",
                                                "sources": [
                                                    {
                                                        "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                                                        "contributor": "/s/contributor/omcs/hirni"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                                                        "contributor": "/s/contributor/omcs/natura1ist"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                                                        "contributor": "/s/contributor/omcs/tamar"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                                                        "contributor": "/s/contributor/omcs/vitafuris"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/b1nk"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/bacellar"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/bmsacr"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/browni"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/chilingo"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/guru1"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/hirni"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/igon"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/jake512"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/leighman"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/natura1ist"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/nk"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/pastymage"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/polymatrix"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/scarfboy"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/schueler"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/skissane"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/smtango"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/suchow"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/tamar"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/trevorm"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/varoa"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/zenkatz"
                                                    }
                                                ],
                                                "features": [
                                                    "/c/en/love /r/CausesDesire -",
                                                    "/c/en/love - /c/en/kiss",
                                                    "- /r/CausesDesire /c/en/kiss"
                                                ],
                                                "surfaceEnd": "kiss someone",
                                                "surfaceText": "[[Love]] would make you want to [[kiss someone]]",
                                                "surfaceStart": "Love"
                                            },
                                            "weight": 9.380832
                                        },
                                        {
                                            "uri": "/a/[/r/CausesDesire/,/c/en/love/,/c/en/propose_to_woman/]",
                                            "data": {
                                                "end": "/c/en/propose_to_woman",
                                                "rel": "/r/CausesDesire",
                                                "uri": "/a/[/r/CausesDesire/,/c/en/love/,/c/en/propose_to_woman/]",
                                                "start": "/c/en/love",
                                                "weight": 7.483314773547882,
                                                "dataset": "/d/conceptnet/4/en",
                                                "license": "cc:by/4.0",
                                                "sources": [
                                                    {
                                                        "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                                                        "contributor": "/s/contributor/omcs/berger"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                                                        "contributor": "/s/contributor/omcs/sshearer"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/browni"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/chilingo"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/guru1"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/ilk"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/kcarnold"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/leighman"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/nk"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/pastymage"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/polymatrix"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/rl78"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/shaleane"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/skissane"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/sshearer"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/thevieve"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/trevorm"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/varoa"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/weboide"
                                                    }
                                                ],
                                                "features": [
                                                    "/c/en/love /r/CausesDesire -",
                                                    "/c/en/love - /c/en/propose_to_woman",
                                                    "- /r/CausesDesire /c/en/propose_to_woman"
                                                ],
                                                "surfaceEnd": "propose to a woman",
                                                "surfaceText": "[[love]] would make you want to [[propose to a woman]]",
                                                "surfaceStart": "love"
                                            },
                                            "weight": 7.483315
                                        },
                                        {
                                            "uri": "/a/[/r/IsA/,/c/en/love/,/c/en/feeling/]",
                                            "data": {
                                                "end": "/c/en/feeling",
                                                "rel": "/r/IsA",
                                                "uri": "/a/[/r/IsA/,/c/en/love/,/c/en/feeling/]",
                                                "start": "/c/en/love",
                                                "weight": 7.211102550927979,
                                                "dataset": "/d/conceptnet/4/en",
                                                "license": "cc:by/4.0",
                                                "sources": [
                                                    {
                                                        "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                                                        "contributor": "/s/contributor/omcs/darkshadow"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                                                        "contributor": "/s/contributor/omcs/jnigrine"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/akh"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/anaitis"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/browni"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/dev"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/faerie420"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/jasongross"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/ninjamatt"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/pastymage"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/po1itiki11"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/schueler"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/weboide"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/winnie"
                                                    }
                                                ],
                                                "features": [
                                                    "/c/en/love /r/IsA -",
                                                    "/c/en/love - /c/en/feeling",
                                                    "- /r/IsA /c/en/feeling"
                                                ],
                                                "surfaceEnd": "a feeling",
                                                "surfaceText": "[[love]] is [[a feeling]]",
                                                "surfaceStart": "love"
                                            },
                                            "weight": 7.2111025
                                        },
                                        {
                                            "uri": "/a/[/r/MotivatedByGoal/,/c/en/propose_to_woman/,/c/en/love/]",
                                            "data": {
                                                "end": "/c/en/love",
                                                "rel": "/r/MotivatedByGoal",
                                                "uri": "/a/[/r/MotivatedByGoal/,/c/en/propose_to_woman/,/c/en/love/]",
                                                "start": "/c/en/propose_to_woman",
                                                "weight": 6.928203230275509,
                                                "dataset": "/d/conceptnet/4/en",
                                                "license": "cc:by/4.0",
                                                "sources": [
                                                    {
                                                        "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                                                        "contributor": "/s/contributor/omcs/shaleane"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/berger"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/browni"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/chilingo"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/guru1"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/ilk"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/kcarnold"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/nk"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/pastymage"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/polymatrix"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/rl78"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/skissane"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/sshearer"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/thevieve"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/trevorm"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/varoa"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/weboide"
                                                    }
                                                ],
                                                "features": [
                                                    "/c/en/propose_to_woman /r/MotivatedByGoal -",
                                                    "/c/en/propose_to_woman - /c/en/love",
                                                    "- /r/MotivatedByGoal /c/en/love"
                                                ],
                                                "surfaceEnd": "you love her",
                                                "surfaceText": "You would [[propose to a woman]] because [[you love her]]",
                                                "surfaceStart": "propose to a woman"
                                            },
                                            "weight": 6.928203
                                        },
                                        {
                                            "uri": "/a/[/r/CausesDesire/,/c/en/love/,/c/en/forgive/]",
                                            "data": {
                                                "end": "/c/en/forgive",
                                                "rel": "/r/CausesDesire",
                                                "uri": "/a/[/r/CausesDesire/,/c/en/love/,/c/en/forgive/]",
                                                "start": "/c/en/love",
                                                "weight": 6.928203230275509,
                                                "dataset": "/d/conceptnet/4/en",
                                                "license": "cc:by/4.0",
                                                "sources": [
                                                    {
                                                        "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                                                        "contributor": "/s/contributor/omcs/aceandsharon"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                                                        "contributor": "/s/contributor/omcs/annedog"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/aceandsharon"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/browni"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/chilingo"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/kcarnold"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/leighman"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/neqsus"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/nk"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/orchid"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/pastymage"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/polymatrix"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/skissane"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/trevorm"
                                                    }
                                                ],
                                                "features": [
                                                    "/c/en/love /r/CausesDesire -",
                                                    "/c/en/love - /c/en/forgive",
                                                    "- /r/CausesDesire /c/en/forgive"
                                                ],
                                                "surfaceEnd": "forgive someone",
                                                "surfaceText": "[[Love]] would make you want to [[forgive someone]]",
                                                "surfaceStart": "Love"
                                            },
                                            "weight": 6.928203
                                        },
                                        {
                                            "uri": "/a/[/r/AtLocation/,/c/en/human/,/c/en/love/]",
                                            "data": {
                                                "end": "/c/en/love",
                                                "rel": "/r/AtLocation",
                                                "uri": "/a/[/r/AtLocation/,/c/en/human/,/c/en/love/]",
                                                "start": "/c/en/human",
                                                "weight": 5.291502622129181,
                                                "dataset": "/d/conceptnet/4/en",
                                                "license": "cc:by/4.0",
                                                "sources": [
                                                    {
                                                        "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                                                        "contributor": "/s/contributor/omcs/wergel"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/bmurdoch"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/greek_panda"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/igon"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/jfw7"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/kcarnold"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/kingjo"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/lightning_storm"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/po1itiki11"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/polymatrix"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/varoa"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/zenith"
                                                    }
                                                ],
                                                "features": [
                                                    "/c/en/human /r/AtLocation -",
                                                    "/c/en/human - /c/en/love",
                                                    "- /r/AtLocation /c/en/love"
                                                ],
                                                "surfaceEnd": "love",
                                                "surfaceText": "You are likely to find [[a human]] in [[love]]",
                                                "surfaceStart": "a human"
                                            },
                                            "weight": 5.2915025
                                        },
                                        {
                                            "uri": "/a/[/r/Causes/,/c/en/love/,/c/en/having_sex/]",
                                            "data": {
                                                "end": "/c/en/having_sex",
                                                "rel": "/r/Causes",
                                                "uri": "/a/[/r/Causes/,/c/en/love/,/c/en/having_sex/]",
                                                "start": "/c/en/love",
                                                "weight": 4.898979485566356,
                                                "dataset": "/d/conceptnet/4/en",
                                                "license": "cc:by/4.0",
                                                "sources": [
                                                    {
                                                        "activity": "/s/activity/omcs/template",
                                                        "contributor": "/s/contributor/omcs/nlhelper"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/browni"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/markp"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/pastymage"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/polymatrix"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/sandos"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/skissane"
                                                    }
                                                ],
                                                "features": [
                                                    "/c/en/love /r/Causes -",
                                                    "/c/en/love - /c/en/having_sex",
                                                    "- /r/Causes /c/en/having_sex"
                                                ],
                                                "surfaceEnd": "having sex",
                                                "surfaceText": "Something that might happen as a consequence of [[love]] is [[having sex]]",
                                                "surfaceStart": "love"
                                            },
                                            "weight": 4.8989797
                                        },
                                        {
                                            "uri": "/a/[/r/RelatedTo/,/c/en/love/,/c/en/emotion/]",
                                            "data": {
                                                "end": "/c/en/emotion",
                                                "rel": "/r/RelatedTo",
                                                "uri": "/a/[/r/RelatedTo/,/c/en/love/,/c/en/emotion/]",
                                                "start": "/c/en/love",
                                                "weight": 4.848917404947211,
                                                "dataset": "/d/verbosity",
                                                "license": "cc:by/4.0",
                                                "sources": [
                                                    {
                                                        "process": "/s/process/split_words",
                                                        "contributor": "/s/resource/verbosity"
                                                    },
                                                    {
                                                        "contributor": "/s/resource/verbosity"
                                                    }
                                                ],
                                                "features": [
                                                    "/c/en/love /r/RelatedTo -",
                                                    "/c/en/love - /c/en/emotion",
                                                    "- /r/RelatedTo /c/en/emotion"
                                                ],
                                                "surfaceEnd": "emotion",
                                                "surfaceText": "[[love]] is related to [[emotion]]",
                                                "surfaceStart": "love"
                                            },
                                            "weight": 4.8489175
                                        },
                                        {
                                            "uri": "/a/[/r/CapableOf/,/c/en/love/,/c/en/hurt/]",
                                            "data": {
                                                "end": "/c/en/hurt",
                                                "rel": "/r/CapableOf",
                                                "uri": "/a/[/r/CapableOf/,/c/en/love/,/c/en/hurt/]",
                                                "start": "/c/en/love",
                                                "weight": 4.47213595499958,
                                                "dataset": "/d/conceptnet/4/en",
                                                "license": "cc:by/4.0",
                                                "sources": [
                                                    {
                                                        "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                                                        "contributor": "/s/contributor/omcs/colm"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/20q_320660577"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/jedighent"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/jnosanov"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/pastymage"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/polymatrix"
                                                    }
                                                ],
                                                "features": [
                                                    "/c/en/love /r/CapableOf -",
                                                    "/c/en/love - /c/en/hurt",
                                                    "- /r/CapableOf /c/en/hurt"
                                                ],
                                                "surfaceEnd": "hurt",
                                                "surfaceText": "[[love]] can [[hurt]]",
                                                "surfaceStart": "love"
                                            },
                                            "weight": 4.472136
                                        },
                                        {
                                            "uri": "/a/[/r/AtLocation/,/c/en/love/,/c/en/family/]",
                                            "data": {
                                                "end": "/c/en/family",
                                                "rel": "/r/AtLocation",
                                                "uri": "/a/[/r/AtLocation/,/c/en/love/,/c/en/family/]",
                                                "start": "/c/en/love",
                                                "weight": 4.47213595499958,
                                                "dataset": "/d/conceptnet/4/en",
                                                "license": "cc:by/4.0",
                                                "sources": [
                                                    {
                                                        "activity": "/s/activity/omcs/template",
                                                        "contributor": "/s/contributor/omcs/shaleane"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/browni"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/jeffmuir"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/laszlonagy"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/polymatrix"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/ranmoth"
                                                    }
                                                ],
                                                "features": [
                                                    "/c/en/love /r/AtLocation -",
                                                    "/c/en/love - /c/en/family",
                                                    "- /r/AtLocation /c/en/family"
                                                ],
                                                "surfaceEnd": "a family",
                                                "surfaceText": "*Something you find in [[a family]] is [[love]]",
                                                "surfaceStart": "love"
                                            },
                                            "weight": 4.472136
                                        },
                                        {
                                            "uri": "/a/[/r/MotivatedByGoal/,/c/en/kiss_boyfriend/,/c/en/love/]",
                                            "data": {
                                                "end": "/c/en/love",
                                                "rel": "/r/MotivatedByGoal",
                                                "uri": "/a/[/r/MotivatedByGoal/,/c/en/kiss_boyfriend/,/c/en/love/]",
                                                "start": "/c/en/kiss_boyfriend",
                                                "weight": 4.47213595499958,
                                                "dataset": "/d/conceptnet/4/en",
                                                "license": "cc:by/4.0",
                                                "sources": [
                                                    {
                                                        "activity": "/s/activity/omcs/template",
                                                        "contributor": "/s/contributor/omcs/dev"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/template",
                                                        "contributor": "/s/contributor/omcs/ppps"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/dev"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/polymatrix"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/ppps"
                                                    }
                                                ],
                                                "features": [
                                                    "/c/en/kiss_boyfriend /r/MotivatedByGoal -",
                                                    "/c/en/kiss_boyfriend - /c/en/love",
                                                    "- /r/MotivatedByGoal /c/en/love"
                                                ],
                                                "surfaceEnd": "you love her",
                                                "surfaceText": "You would [[kiss your boyfriend]] because [[you love her]]",
                                                "surfaceStart": "kiss your boyfriend"
                                            },
                                            "weight": 4.472136
                                        },
                                        {
                                            "uri": "/a/[/r/MotivatedByGoal/,/c/en/feed_family/,/c/en/love/]",
                                            "data": {
                                                "end": "/c/en/love",
                                                "rel": "/r/MotivatedByGoal",
                                                "uri": "/a/[/r/MotivatedByGoal/,/c/en/feed_family/,/c/en/love/]",
                                                "start": "/c/en/feed_family",
                                                "weight": 4,
                                                "dataset": "/d/conceptnet/4/en",
                                                "license": "cc:by/4.0",
                                                "sources": [
                                                    {
                                                        "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                                                        "contributor": "/s/contributor/omcs/asteriskman"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/asteriskman"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/pastymage"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/rocketboy"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/wjwilkie"
                                                    }
                                                ],
                                                "features": [
                                                    "/c/en/feed_family /r/MotivatedByGoal -",
                                                    "/c/en/feed_family - /c/en/love",
                                                    "- /r/MotivatedByGoal /c/en/love"
                                                ],
                                                "surfaceEnd": "i love them",
                                                "surfaceText": "You would [[feed your family]] because [[i love them]]",
                                                "surfaceStart": "feed your family"
                                            },
                                            "weight": 4
                                        },
                                        {
                                            "uri": "/a/[/r/AtLocation/,/c/en/love/,/c/en/marriage/]",
                                            "data": {
                                                "end": "/c/en/marriage",
                                                "rel": "/r/AtLocation",
                                                "uri": "/a/[/r/AtLocation/,/c/en/love/,/c/en/marriage/]",
                                                "start": "/c/en/love",
                                                "weight": 4,
                                                "dataset": "/d/conceptnet/4/en",
                                                "license": "cc:by/4.0",
                                                "sources": [
                                                    {
                                                        "activity": "/s/activity/omcs/template",
                                                        "contributor": "/s/contributor/omcs/shaleane"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/lightning_storm"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/polymatrix"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/tulash"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/ullberg"
                                                    }
                                                ],
                                                "features": [
                                                    "/c/en/love /r/AtLocation -",
                                                    "/c/en/love - /c/en/marriage",
                                                    "- /r/AtLocation /c/en/marriage"
                                                ],
                                                "surfaceEnd": "marriage",
                                                "surfaceText": "*Something you find in [[marriage]] is [[love]]",
                                                "surfaceStart": "love"
                                            },
                                            "weight": 4
                                        },
                                        {
                                            "uri": "/a/[/r/CausesDesire/,/c/en/love/,/c/en/feed_family/]",
                                            "data": {
                                                "end": "/c/en/feed_family",
                                                "rel": "/r/CausesDesire",
                                                "uri": "/a/[/r/CausesDesire/,/c/en/love/,/c/en/feed_family/]",
                                                "start": "/c/en/love",
                                                "weight": 4,
                                                "dataset": "/d/conceptnet/4/en",
                                                "license": "cc:by/4.0",
                                                "sources": [
                                                    {
                                                        "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                                                        "contributor": "/s/contributor/omcs/rocketboy"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                                                        "contributor": "/s/contributor/omcs/wjwilkie"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/asteriskman"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/pastymage"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/rocketboy"
                                                    }
                                                ],
                                                "features": [
                                                    "/c/en/love /r/CausesDesire -",
                                                    "/c/en/love - /c/en/feed_family",
                                                    "- /r/CausesDesire /c/en/feed_family"
                                                ],
                                                "surfaceEnd": "feed your family",
                                                "surfaceText": "[[Love]] would make you want to [[feed your family]]",
                                                "surfaceStart": "Love"
                                            },
                                            "weight": 4
                                        },
                                        {
                                            "uri": "/a/[/r/CausesDesire/,/c/en/love/,/c/en/sing/]",
                                            "data": {
                                                "end": "/c/en/sing",
                                                "rel": "/r/CausesDesire",
                                                "uri": "/a/[/r/CausesDesire/,/c/en/love/,/c/en/sing/]",
                                                "start": "/c/en/love",
                                                "weight": 4,
                                                "dataset": "/d/conceptnet/4/en",
                                                "license": "cc:by/4.0",
                                                "sources": [
                                                    {
                                                        "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                                                        "contributor": "/s/contributor/omcs/emmsie"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/jinx"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/lightning_storm"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/loiosh"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/polymatrix"
                                                    }
                                                ],
                                                "features": [
                                                    "/c/en/love /r/CausesDesire -",
                                                    "/c/en/love - /c/en/sing",
                                                    "- /r/CausesDesire /c/en/sing"
                                                ],
                                                "surfaceEnd": "sing",
                                                "surfaceText": "[[love]] would make you want to [[sing]]",
                                                "surfaceStart": "love"
                                            },
                                            "weight": 4
                                        },
                                        {
                                            "uri": "/a/[/r/UsedFor/,/c/en/kissing/,/c/en/love/]",
                                            "data": {
                                                "end": "/c/en/love",
                                                "rel": "/r/UsedFor",
                                                "uri": "/a/[/r/UsedFor/,/c/en/kissing/,/c/en/love/]",
                                                "start": "/c/en/kissing",
                                                "weight": 4,
                                                "dataset": "/d/conceptnet/4/en",
                                                "license": "cc:by/4.0",
                                                "sources": [
                                                    {
                                                        "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                                                        "contributor": "/s/contributor/omcs/annedog"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                                                        "contributor": "/s/contributor/omcs/zenith"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/amy"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/zenith"
                                                    }
                                                ],
                                                "features": [
                                                    "/c/en/kissing /r/UsedFor -",
                                                    "/c/en/kissing - /c/en/love",
                                                    "- /r/UsedFor /c/en/love"
                                                ],
                                                "surfaceEnd": "love",
                                                "surfaceText": "[[kissing someone]] is for [[love]]",
                                                "surfaceStart": "kissing someone"
                                            },
                                            "weight": 4
                                        },
                                        {
                                            "uri": "/a/[/r/RelatedTo/,/c/en/love/,/c/en/feeling/]",
                                            "data": {
                                                "end": "/c/en/feeling",
                                                "rel": "/r/RelatedTo",
                                                "uri": "/a/[/r/RelatedTo/,/c/en/love/,/c/en/feeling/]",
                                                "start": "/c/en/love",
                                                "weight": 3.6954025491142373,
                                                "dataset": "/d/verbosity",
                                                "license": "cc:by/4.0",
                                                "sources": [
                                                    {
                                                        "process": "/s/process/split_words",
                                                        "contributor": "/s/resource/verbosity"
                                                    },
                                                    {
                                                        "contributor": "/s/resource/verbosity"
                                                    }
                                                ],
                                                "features": [
                                                    "/c/en/love /r/RelatedTo -",
                                                    "/c/en/love - /c/en/feeling",
                                                    "- /r/RelatedTo /c/en/feeling"
                                                ],
                                                "surfaceEnd": "feeling",
                                                "surfaceText": "[[love]] is related to [[feeling]]",
                                                "surfaceStart": "love"
                                            },
                                            "weight": 3.6954026
                                        },
                                        {
                                            "uri": "/a/[/r/RelatedTo/,/c/en/care/,/c/en/love/]",
                                            "data": {
                                                "end": "/c/en/love",
                                                "rel": "/r/RelatedTo",
                                                "uri": "/a/[/r/RelatedTo/,/c/en/care/,/c/en/love/]",
                                                "start": "/c/en/care",
                                                "weight": 3.595552808679077,
                                                "dataset": "/d/verbosity",
                                                "license": "cc:by/4.0",
                                                "sources": [
                                                    {
                                                        "process": "/s/process/split_words",
                                                        "contributor": "/s/resource/verbosity"
                                                    },
                                                    {
                                                        "contributor": "/s/resource/verbosity"
                                                    }
                                                ],
                                                "features": [
                                                    "/c/en/care /r/RelatedTo -",
                                                    "/c/en/care - /c/en/love",
                                                    "- /r/RelatedTo /c/en/love"
                                                ],
                                                "surfaceEnd": "love",
                                                "surfaceText": "[[care]] is related to [[love]]",
                                                "surfaceStart": "care"
                                            },
                                            "weight": 3.595553
                                        },
                                        {
                                            "uri": "/a/[/r/HasSubevent/,/c/en/love/,/c/en/kiss/]",
                                            "data": {
                                                "end": "/c/en/kiss",
                                                "rel": "/r/HasSubevent",
                                                "uri": "/a/[/r/HasSubevent/,/c/en/love/,/c/en/kiss/]",
                                                "start": "/c/en/love",
                                                "weight": 3.4641016151377544,
                                                "dataset": "/d/conceptnet/4/en",
                                                "license": "cc:by/4.0",
                                                "sources": [
                                                    {
                                                        "activity": "/s/activity/omcs/template",
                                                        "contributor": "/s/contributor/omcs/peterravn"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/template",
                                                        "contributor": "/s/contributor/omcs/shaleane"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/polymatrix"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/shaleane"
                                                    }
                                                ],
                                                "features": [
                                                    "/c/en/love /r/HasSubevent -",
                                                    "/c/en/love - /c/en/kiss",
                                                    "- /r/HasSubevent /c/en/kiss"
                                                ],
                                                "surfaceEnd": "kiss them",
                                                "surfaceText": "One of the things you do when you [[love someone]] is [[kiss them]]",
                                                "surfaceStart": "love someone"
                                            },
                                            "weight": 3.4641016
                                        },
                                        {
                                            "uri": "/a/[/r/IsA/,/c/en/god/,/c/en/love/]",
                                            "data": {
                                                "end": "/c/en/love",
                                                "rel": "/r/IsA",
                                                "uri": "/a/[/r/IsA/,/c/en/god/,/c/en/love/]",
                                                "start": "/c/en/god",
                                                "weight": 3.4641016151377544,
                                                "dataset": "/d/conceptnet/4/en",
                                                "license": "cc:by/4.0",
                                                "sources": [
                                                    {
                                                        "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                                                        "contributor": "/s/contributor/omcs/baixiang"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                                                        "contributor": "/s/contributor/omcs/bmurdoch"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/omcs1_possibly_free_text",
                                                        "contributor": "/s/contributor/omcs/hotthamir"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/artifexcrastinus"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/bmurdoch"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/brainmagmo"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/hotthamir"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/jalanb"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/keratak"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/polymatrix"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/socrates"
                                                    },
                                                    {
                                                        "activity": "/s/activity/omcs/vote",
                                                        "contributor": "/s/contributor/omcs/vilius"
                                                    }
                                                ],
                                                "features": [
                                                    "/c/en/god /r/IsA -",
                                                    "/c/en/god - /c/en/love",
                                                    "- /r/IsA /c/en/love"
                                                ],
                                                "surfaceEnd": "Love",
                                                "surfaceText": "[[God]] is [[Love]]",
                                                "surfaceStart": "God"
                                            },
                                            "weight": 3.4641016
                                        },
                                        {
                                            "uri": "/a/[/r/Synonym/,/c/pt/paixão/n/wn/cognition/,/c/en/love/n/wn/cognition/]",
                                            "data": {
                                                "end": "/c/en/love/n/wn/cognition",
                                                "rel": "/r/Synonym",
                                                "uri": "/a/[/r/Synonym/,/c/pt/paixão/n/wn/cognition/,/c/en/love/n/wn/cognition/]",
                                                "start": "/c/pt/paixão/n/wn/cognition",
                                                "weight": 3.4641016151377544,
                                                "dataset": "/d/wordnet/3.1",
                                                "license": "cc:by/4.0",
                                                "sources": [
                                                    {
                                                        "contributor": "/s/resource/wordnet/rdf/3.1"
                                                    }
                                                ],
                                                "features": [
                                                    "/c/pt/paixão /r/Synonym -",
                                                    "/c/pt/paixão - /c/en/love",
                                                    "- /r/Synonym /c/en/love"
                                                ],
                                                "surfaceEnd": "love",
                                                "surfaceText": "[[Paixão]] is a translation of [[love]]",
                                                "surfaceStart": "Paixão"
                                            },
                                            "weight": 3.4641016
                                        }
                                    ], {db: undefined}]
                                }
                            }
                        }
                    }
                }, criteria, limit, offset)
            }, uri, limit, offset)
        }
    }
}
