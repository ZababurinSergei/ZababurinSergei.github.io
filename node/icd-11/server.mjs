import express from 'express';
import cors from "cors";
import Enqueue from "express-enqueue";
import compression from "compression";
import corsOptions from './config/cors/index.mjs';
import shouldCompress from './config/compression/index.mjs';
import * as dotenv from 'dotenv';
import memorystore from './model.mjs';
import OAuthServer from "express-oauth-server";
import axios from "axios";

dotenv.config();

let app = express();

app.use((req, res, next) => {
    console.log(`ICD-11: ${req.path}`);
    next();
});

// app.oauth = new OAuthServer({
//     model: memorystore,
//     useErrorHandler: false,
//     continueMiddleware: false,
// });

app.use(await express.json());
app.use(await compression({ filter: shouldCompress }));
app.use(await cors({ credentials: true }));

// app.use(app.oauth.authorize());

// app.use(function(req, res) {
//     console.log('@@@@@@@@@@@@@@@@')
//     res.send('Secret area');
// });

const queue = new Enqueue({
    concurrentWorkers: 4,
    maxSize: 200,
    timeout: 30000
});

const config = {
    headers: {
        accept: "application/json",
        "API-Version": "v2",
        "Accept-Language": "en",
        Authorization: `Bearer ${process.env.token}`
    }
};

// const res = await axios.get('https://id.who.int/icd/entity?releaseId=2022-02', config)
// console.log('res', res.data)
// /browse11
app.options('/browse11/*', cors(corsOptions))
app.get('/browse11/*', async (req, res) => {
    console.log('<<< ======= >>>', req.originalUrl, req.params, req._parsedUrl.search)
    axios.get(`https://icd.who.int${req.originalUrl}`, config)
        .then((response) => {
            // console.log('== response ==', response.data)
            res.send(response.data)
        })
        .catch(e => {
            console.log('ERROR', e)
            res.end()
        })
    //
    // res.sendFile('/docs/index.html', { root: __dirname });
})

app.use(queue.getMiddleware());
app.options(await cors(corsOptions))

app.use(queue.getErrorMiddleware())

export default app
