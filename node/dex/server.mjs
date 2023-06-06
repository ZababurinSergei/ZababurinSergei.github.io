import express from "express";
import path from "path";
const __dirname = path.join(path.dirname(process.argv[1]));
import proxy from "express-http-proxy";
import config from 'config';
import cors from "cors";
import corsOptions from "./_this/cors/index.mjs";
import { jsonify } from './utilites/json_rendering.mjs';
import {get_int, min, max, int, responses} from './utilites/index.mjs'
const VALID_KEYS = ['rel', 'start', 'end', 'node', 'other', 'source', 'uri']
let namespace = path.dirname(process.argv[1]).split('/');

const app = express();

app.use(await cors({ credentials: true }));

app.use((req, res, next) => {
    console.log(`node ${namespace[namespace.length -1]}: ${req.path}`);
    next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log('system: ', {
    __dirname: __dirname,
    static: path.join(__dirname, '/conceptnet_web/static')
})


app.use(express.static(path.join(__dirname, '/conceptnet_web/static')));

app.use((req, res, next) => {
    next();
});

app.get('/[acdrs]/*', async (req, res) => {
    let results = {};
    const req_args = req.query ? req.query : 0
    const path = req.url
    const offset = get_int(req_args, 'offset', 0, 0, 100000)
    let limit = get_int(req_args, 'limit', 20, 0, 1000)
    let grouped = req.get('grouped')
    grouped = grouped ? grouped.lower() === 'true': false

    if(grouped) {
        limit = min(limit, 100)
        results = await responses.lookup_grouped_by_feature(path, limit)
    } else if(path.startsWith('/a/')) {
        results = await responses.lookup_single_assertion(path)
    } else {
        results = await responses.lookup_paginated(path, offset, limit)
        console.log('results', results)
        results = jsonify(results)
    }

    res.status(200).send(results)
})

app.get('/related/:uri', async (req, res) => {
    res.status(200).send(jsonify({
        '@context': responses.CONTEXT,
    }))
})

app.get('/relatedness', async (req, res) => {
    console.log('ssssssssssssssssssssssss', req.query)
    const node1 = req.query.node1
    const node2 = req.query.node2
    const result = responses.query_relatedness(node1, node2)
    // return jsonify(result)
    res.status(200).send(jsonify({
        '@context': responses.CONTEXT,
    }))
})

app.get(/(uri|normalize|standardize)/, async (req, res) => {
    res.status(200).send(jsonify({
        '@context': responses.CONTEXT,
    }))
})

app.get(/(search|query)/, async (req, res) => {
    const req_args = req.query
    let criteria = {}
    let offset = 0
    if(req_args.offset) {
        if(req_args.offset < 0) {
            offset = 0
        } else if(req_args.offset > 100000) {
            offset = 100000
        } else {
            offset = req_args.offset
        }
    }
    let limit = 0
    if(req_args.limit) {
        if(req_args.limit < 0) {
            limit = 0
        } else if(req_args.limit > 100000) {
            limit = 100000
        } else {
            limit = req_args.limit
        }
    }

    for(let key of VALID_KEYS) {
        if(req_args.hasOwnProperty(key)) {
            criteria[key] = req_args[key]
        }
    }

    const results = await responses.query_paginated(criteria, offset, limit)
    res.status(200).send(jsonify(results))
})

app.options('/dex/*', await cors(corsOptions))
app.get('/dex/*', async (req, res) => {
    console.log('DEX GET', req.path)
    res.status(200).send(jsonify({
        '@context': responses.CONTEXT,
        'rdfs:comment': `See ${responses.CONCEPTNET} for more information about ConceptNet, and ${responses.CONCEPTNET_DOCS} for the API documentation.`
    }))
})

app.options('/dex/*', await cors(corsOptions))
app.post('/dex/*', async (req, res) => {
    console.log('DEX POST', req.path)
    res.status(200).send(jsonify({
        '@context': responses.CONTEXT,
        'rdfs:comment': `See ${responses.CONCEPTNET} for more information about ConceptNet, and ${responses.CONCEPTNET_DOCS} for the API documentation.`
    }))
})

app.options(`/*`, await cors(corsOptions))
app.get(`/*`, async (req, res) => {
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
    res.status(200).send(jsonify({
        '@context': responses.CONTEXT,
        'rdfs:comment': `See ${responses.CONCEPTNET} for more information about ConceptNet, and ${responses.CONCEPTNET_DOCS} for the API documentation.`
    }))
})



export default app
