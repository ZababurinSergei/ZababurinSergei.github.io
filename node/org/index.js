import path from "path";
let __dirname = path.dirname(process.argv[1]);
import mongo from "./docs/static/html/components/component_modules/mongo/mongoose.js"
import whitelist from './docs/static/html/components/component_modules/whitelist/whitelist.js'
import express from "express";
import cors from "cors";
import Enqueue from "express-enqueue";
import compression from "compression";
import bodyParser from 'body-parser'
let app = express();
app.use(compression())
app.use(cors())
const queue = new Enqueue({
    concurrentWorkers: 4,
    maxSize: 200,
    timeout: 30000
});
app.use(queue.getMiddleware());

app.use(bodyParser.json({limit: '40mb'}))
app.use(bodyParser.urlencoded({limit: '40mb', extended: true, parameterLimit: 50000}))

let corsOptions = {
    origin: function (origin, callback) {
        console.log('--->', origin)
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use( express.static('docs'));
app.use( express.static('static'));

app.get('/', async (req, res) => {
    res.sendFile('/docs/index.html', { root: __dirname });
})
app.get('/api/info', async (req, res) => {
    res.send({org:'1.0.0'})
})
app.options('/api/feed', cors(corsOptions))
app.get('/api/feed', async (req, res) => {
    let rss = await mongo(false, '~~~','3', { },'feed')
    res.type('rss');
    if(rss[0]['feed'] === undefined){
        res.send(rss);
    }else{
        res.send(rss[0]['feed']['rss']);
    }
})

app.use(queue.getErrorMiddleware())
export default app
