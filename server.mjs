import path from "path";
import fs from 'node:fs/promises'
import process from 'process';
let __dirname = process.cwd();
import nodemailer from 'nodemailer'
import cors from "cors";
import Enqueue from "express-enqueue";
import compression from "compression";
import proxy from "express-http-proxy";
import * as dotenv from 'dotenv'
import JiraApi from 'jira-client';
import express from 'express';
dotenv.config()

export const modules = async (app) => {
    let whitelist = ['http://localhost:3000', 'http://localhost:9876', 'https://web3-monopoly.web.app', 'http://localhost:8886', 'https://zababurinsv.github.io', 'https://zababurinsv.github.io/monopoly/', 'http://localhost:8887', 'http://localhost:8888', 'http://localhost:6040', 'https://xart-3e938.firebaseapp.com', 'https://xart-3e938.web.app', 'https://universitykids.ru', 'https://vashi-faili.web.app', 'https://vashi-faili.web.app', 'https://www.universitykids.ru', 'https://tuning-fork.firebaseapp.com', 'http://localhost:8888', 'https://jainagul-tezekbaeva.firebaseapp.com', 'https://tezekbaeva.firebaseapp.com', 'http://localhost:6112'];

    const transporter = nodemailer.createTransport({
        host: 'mail.digitalms.ru',
        port: 587,
        secure: false,
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: 'techmailhr',
            pass: '%hbHhsxk3e8auM7y'
        }
    });

// const aggregatorRegistry = new AggregatorRegistry();
// register for prometheus aggregation
// app.get('/metrics', async (_, res) => {
//     const metrics = await getAggregateMetrics();
//     res.set('Content-Type', aggregatorRegistry.contentType);
//     res.send(metrics.metrics());
// });
// metrics for graphql requests
// const apolloMetricsPlugin = createMetricsPlugin(register);
// metrics for rest requests
// app.use(
//     promBundle({
//         autoregister: false, // disable /metrics for single workers
//         includeMethod: true,
//         includeStatusCode: true,
//         includePath: true,
//         promRegistry: register,
//     }),
// );

    app.use(compression());
    app.use(express.json());

    const jira = new JiraApi({
        protocol: process.env.JIRA_protocol,
        host: process.env.JIRA_host,
        username: process.env.JIRA_username,
        password: process.env.JIRA_password,
        apiVersion: process.env.JIRA_apiVersion,
        strictSSL: process.env.JIRA_strictSSL
    });

    const queue = new Enqueue({
        concurrentWorkers: 4,
        maxSize: 200,
        timeout: 30000
    });

    console.log('__dirname', __dirname);

    app.use(await cors({ credentials: true }));
    app.use(queue.getMiddleware());

    app.use((req, res, next) => {
        // console.log(`node: 'icd-11': ${req.method}: ${req.path}`);
        next();
    });

// app.set('view cache', false);
// app.use((req, res, next) => {
    // res.set('Cache-Control', 'no-store')
    // next()
// })

    app.get(`/welcomebook`, (req, res, next) => {
        next();
    });

    app.get(`/rules`, (req, res, next) => {
        next();
    });

// app.set('etag', false)
// const traceExporter = new ConsoleSpanExporter();
    let corsOptions = {
        origin: function (origin, callback) {
            console.log('origin', origin);
            if (whitelist.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        }
    };

// app.use(proxy('https://mkb11-compose-dev.digitalms.ru', {
//     limit: '5mb',
//     filter: function(req) {
//         const data = ['/v1/'].some(path => req.path.includes(path))
//         return data
//     }
// }));

    function getRandomNumber (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    app.get('/rolldice', (req, res) => {
        res.send(getRandomNumber(1, 6).toString());
    });

    app.use(proxy('http://svc-fer-dev.helpms.ru:3333', {
        limit: '5mb',
        filter: function (req) {
            const data = ['/v1/'].some(path => req.path.startsWith(path));
            return data;
        }
    }));

// app.use(proxy('http://localhost', {
//     limit: '5mb',
//     filter: function(req) {
//         const data = ['/v1/'].some(path => req.path.includes(path))
//         return true
//     }
// }));

    app.get(`/metrics`, async (req, res) => {
        // console.log('index ----- index', __dirname)
        res.status(200).send(`# HELP pm2_up Is the process runningZ
# TYPE pm2_up gauge
pm2_up{id="1",name="pm2-metrics",instance="0",interpreter="node",node_version="19.4.0"} 1
pm2_up{id="3",name="welcomebook",instance="0",interpreter="node",node_version="19.4.0"} 0
pm2_up{id="4",name="welcomebook",instance="1",interpreter="node",node_version="19.4.0"} 0
pm2_up{id="5",name="welcomebook",instance="2",interpreter="node",node_version="19.4.0"} 0

# HELP pm2_up Is the process runningZ
# TYPE pm2_up gauge
POST{id="0",name="api",instance="0",url="http://localhost:3333/newkind/save", interpreter="node",node_version="19.4.0"} 0`);
    });

    app.post(`/smtp_client`, async (req, res) => {
        try {
            // console.log('@@@@@@@@@@@@@@@@@@2', req.body)
            console.log('SEND EMAIL', {
                from: '"Welcome Book feedback" <welcomebook@digitalms.ru>',
                to: 'hr@digitalms.ru',
                subject: 'Welcome Book feedback',
                html: `<b>${req.body.mail.message}</b>`
            });

            const info = await transporter.sendMail({
                from: '"Welcome Book feedback" <welcomebook@digitalms.ru>',
                to: 'zababurins@vk.com',
                subject: 'Welcome Book feedback',
                html: `<b>${req.body.mail.message}</b>`
            });

            console.log('RESPONSE FROM SMTP HOST', info);
            res.status(200).send({
                status: true,
                message: info
            });
        } catch (e) {
            res.send({
                status: false,
                message: ''
            });
        }
    });

    app.post(`/*`, async (req, res) => {
        console.log('==== POST ====', req);
    });

    app.use(proxy('localhost:8080', {
        limit: '5mb',
        filter: function (req) {
            const data = ['/code/'].some(path => req.path.includes(path));
            return data;
        }
    }));

    if (process.env.SANDBOX === 'true') {
        app.use('/', express.static(`${__dirname}/_sandbox/welcomebook/src`));
        app.use('/rules', express.static(`${__dirname}/_sandbox/rules/src`));
    } else {
        // app.use('/services', express.static(`${__dirname}/services`));
        app.use('/rules', express.static(`${__dirname}/services/rules/src`));
        app.use('/welcomebook', express.static(`${__dirname}/services/welcomebook/src`));
        app.use('/blockchain', express.static(`${__dirname}/services/blockchain/src`));
        app.use('/newkind', express.static(`${__dirname}/services/newkind/src`));
        app.use('/elite', express.static(`${__dirname}/services/elite/src`));
        app.use('/terminal', express.static(`${__dirname}/services/terminal/src`, {
            setHeaders: function (res, path, stat) {
                res.set('Cross-Origin-Embedder-Policy', 'require-corp');
                res.set('Cross-Origin-Opener-Policy', 'same-origin');
            }
        }));
        app.use('/database', express.static(`${__dirname}/services/database/build`));
        // app.use('/terminal', express.static(`${__dirname}/services/terminal/src`));
        app.use('/docs', express.static(`${__dirname}/services/docs/docs`));
    }

    app.use('/template', express.static(`${__dirname}/template`));
    app.use(express.static(`${__dirname}/docs`));
    app.use('/services', express.static(`${__dirname}/services`));

    app.use('/modules', express.static(`${__dirname}/services/database/build/modules`));
// app.get(`/welcomebook/*`, async (req, res) => {
//     res.status(200).sendFile(path.join(__dirname, '/services/welcomebook/examples/v2.29.2.html'));
// })

// app.use(express.static(`${__dirname}/services/welcomebook/src`));

    app.post(`/mail`, async (req, res) => {
        console.log('index ----- index', req.body.mail.message);
        // let info = {}
        // try {
        //     info = await transporter.sendMail({
        //         from:'<WelcomeBook@digitalms.ru>',
        //         to: "m.ivanova@digitalms.ru",
        //         subject: "Welcome Book",
        //         text: req.body.mail.message
        //     });
        //     console.log("Message sent: %s", info.messageId);
        //
        //     res.status(200).send({
        //         status: true,
        //         message: info
        //     })
        // } catch (e) {
        //     console.log("Message sent: %s", info.messageId);
        // res.status(400).send({
        //     status: false,
        //     message: e
        // })
        // console.log('eeeeeeeeeeee', e)
        // }
        // const info = await transporter.sendMail({
        //     from:'"Welcome Book feedback" <hr@digitalms.ru>',
        //     to: "zababurins@vk.com",
        //     subject: "Welcome Book feedback",
        //     text: req.body.mail.message
        // });

        const info = await transporter.sendMail({
            from: '"Welcome Book feedback"',
            to: 'hr@digitalms.ru',
            subject: 'Welcome Book feedback',
            html: `<b>${req.body.mail.message}</b>`
        });

        res.status(200).send({
            status: true,
            message: info
        });

        // to: "m.ivanova@digitalms.ru",

        // const info = await transporter.sendMail({
        //     from:'Welcome Book 👻',
        //     to: "zababurins@vk.com",
        //     subject: "Welcome Book",
        //     text: req.body.mail.message
        // });
        // hr@digitalms.ru
//them@website.com

    });

    app.get(`/*`, async (req, res) => {
        // console.log('index ----- index', __dirname)
        res.status(200).sendFile(path.join(__dirname, '/docs/index.html'));
    });

//https://jira-node.github.io/class/src/jira.js~JiraApi.html
//https://jira-node.github.io/file/src/jira.js.html#lineNumber22
    app.post(`/project`, async (req, res) => {
        try {
            const project = await jira.getProject('MKB11');
            // const issue = await jira.findIssue(10);
            // console.log(`Status: ${issue.fields.status.name}`);
            console.log('========= JIRA =========', project);
            res.status(200).send(project);
        } catch (err) {
            console.error(err);
            res.status(400).send(err);
        }
    });

    app.use(queue.getErrorMiddleware());

    const port = (process.env.PORT)
        ? process.env.PORT
        : 3001;

    process.on('SIGINT', function () {
        process.exit(0);
    });

    app.listen(port, () => {
        console.log('pid: ', process.pid);
        console.log('listening on http://localhost:' + port);
    });
}

export default {
    description: 'server welcomebook'
}