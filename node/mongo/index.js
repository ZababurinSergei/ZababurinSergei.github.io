import path from "path";
let __dirname = path.dirname(process.argv[1]);
import mongo from "./docs/static/html/components/component_modules/mongo/mongoose.js"
import express from "express";
import cors from "cors";
import Enqueue from "express-enqueue";
import compression from "compression";
import bodyParser from 'body-parser'
import routes from './Routes/index.js'
let whitelist = ['http://localhost:9876','https://web3-monopoly.web.app','http://localhost:8886','https://zababurinsv.github.io','https://zababurinsv.github.io/monopoly/','http://localhost:8887','http://localhost:8888','http://localhost:6040','https://xart-3e938.firebaseapp.com','https://xart-3e938.web.app','https://universitykids.ru','https://vashi-faili.web.app','https://vashi-faili.web.app',  'https://www.universitykids.ru', 'https://tuning-fork.firebaseapp.com','http://localhost:8888','https://jainagul-tezekbaeva.firebaseapp.com','https://tezekbaeva.firebaseapp.com','http://localhost:6112']
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
        console.log('origin', origin)
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use( express.static('docs'));
app.use( express.static('static'));


// app.get('/user', async (req, res, next) => {
//     const userOne = new User("Alexander", "fake@gmail.com");
//     const userTwo = new User("Ryan", "fakeagain@gmail.com");
//     res.json({ userOne, userTwo });
// })

app.options('/api/storage/set/item', cors(corsOptions))
app.post('/api/storage/set/item', cors(corsOptions),async (req, res) => {
    let out = await mongo(false,'a','5',  req.body, '/storage/set/item')
    res.json(out)
})
app.options('/api/storage/delete/all', cors(corsOptions))
app.post('/api/storage/delete/all', cors(corsOptions),async (req, res) => {
    let out = await mongo(false,'dex','5',  req.body, '/storage/delete/all')
    res.json(out)
})

app.use("/api/v1", routes);

app.get('/*', async (req, res) => {
    res.sendFile('/docs/index.html', { root: __dirname });
})
app.use(queue.getErrorMiddleware())
export default app
