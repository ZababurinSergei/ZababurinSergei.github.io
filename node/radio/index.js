#!/usr/bin/env node
const whitelist = require('./whitelist/whitelist.cjs')
require('./config');
const express = require('express');
const cors = require('cors')
const Enqueue = require('express-enqueue')
const compression = require('compression')
const bodyParser = require('body-parser')
let { Worker } = require('worker_threads')
const Path = require('path');
const Engine = require('./engine');
const { queue } = require('./engine');

void async function startApp() {

    try {
        let app = express();
        app.use(compression())
        const enqueue = new Enqueue({
            concurrentWorkers: 4,
            maxSize: 200,
            timeout: 30000
        });
        app.use(cors())
        app.use(enqueue.getMiddleware());
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

        app.use(express.static('public'));

        //app.options('/stream', cors(corsOptions))
        //app.get('/stream', async (req, res) => {
          //  const { id, responseSink } = queue.makeResponseSink();
         //   req.app.sinkId = id;
         //   req.events.once('disconnect', () => {
           //     console.log('disconect')
             //   queue.removeResponseSink(req.app.sinkId);
            //});

        //    console.log('stream-----responseSink-->>>', responseSink)
      //      res.type('audio/mpeg');
          //  res.send({ key: 'value' })
            //res.send(responseSink)
       // });

   //     app.options('/', cors(corsOptions))
   //     app.get('/', async (req, res) => {
     //       res.sendFile('/index.html', { root: __dirname });
       // });

//        app.options('/:filename', cors(corsOptions))
   //     app.get('/:filename', async (req, res) => {
     //       console.log('__________________--->', req.params.filename)
       //         res.send({ kdy: 'fffdd' })
   //     });

    //     Engine.start();
        let port = 8082;
        app.listen(port, function () { console.log('listening on http://localhost:' + port); });
    }
    catch (err) {
        console.log(`Server errored with: ${err}`);
        console.error(err.stack);
        process.exit(1);
    }
}();
