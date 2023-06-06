import fs from "fs";
import path from "path";
let __dirname = path.dirname(process.argv[1]);
import whitelist from './whitelist/whitelist.mjs'
import express from "express";
import {promisify} from "util";
const getStat = promisify(fs.stat);
import cors from "cors";
import Enqueue from "express-enqueue";
import compression from "compression";
import bodyParser from 'body-parser'
import routes from './Routes/index.mjs'
import stream from "./webdav/webdav.mjs"
import { Worker } from "worker_threads";

export default stream(false,'a','5',  {}, '/storage/audio/streem').then((audio)=>{
    return new Promise(async (resolve, reject) => {
        
        let app = express();
        app.use(compression())
        const queue = new Enqueue({
            concurrentWorkers: 4,
            maxSize: 200,
            timeout: 30000
        });
        app.use(cors())
        app.use(queue.getMiddleware());
        app.use(bodyParser.json())
        let corsOptions = {
            origin: function (origin, callback) {
                if (whitelist.indexOf(origin) !== -1) {
                    callback(null, true)
                } else {
                    callback(new Error('Not allowed by CORS'))
                }
            }
        }
        
        app.use( express.static('docs'));
    
        app.options('/storage/audio/streem', cors(corsOptions))
        app.get('/storage/audio/streem', async (req, res) => {
            
            audio.pipe(res)
        });
    
        app.options('/storage/set/item', cors(corsOptions))
        app.post('/storage/set/item', cors(corsOptions),async (req, res) => {
            let out = await yandex(false,'a','5',  req.body, '/storage/set/item')
            res.json({key:'value'})
        })
    
        app.options('/storage/delete/all', cors(corsOptions))
        app.post('/storage/delete/all', cors(corsOptions),async (req, res) => {
            let out = await yandex(false,'dex','5',  req.body, '/storage/delete/all')
            res.json({key:'value'})
        })
    
        app.options('/storage/connecting', cors(corsOptions))
        app.post('/storage/connecting', cors(corsOptions),async (req, res) => {
            mainStreem.pipe(res)
        })
    
        app.get('/import', async (req, res) => {
            res.sendFile('/docs/import.html', { root: __dirname });
        })
    
        app.get('/', async (req, res) => {
            res.sendFile('/docs/index.html', { root: __dirname });
        })
    
    
        app.use("/api/v1", routes);
    
        app.use(queue.getErrorMiddleware())
    
    
        resolve(app)
    })
    
})
