import path from 'path';
import process from 'process';
import nodemailer from 'nodemailer';
import cors from 'cors';
import Enqueue from 'express-enqueue';
import compression from 'compression';
import proxy from 'express-http-proxy';
import * as dotenv from 'dotenv';
import JiraApi from 'jira-client';
import express from 'express';
import { env } from './env.node.mjs'

let __dirname = process.cwd();
dotenv.config();
export const modules = async (app) => {
    let whitelist = [];

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
        console.log(`node: 'icd-11': ${req.method}: ${req.path}`);
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

    app.get(`/checklist`, (req, res, next) => {
        next();
    });

    app.get(`/daap`, (req, res, next) => {
        next();
    });

    app.get(`/wallet`, (req, res, next) => {
        next();
    });

    app.get(`/mss`, (req, res, next) => {
        next();
    });

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
    function getRandomNumber (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    app.get('/rolldice', (req, res) => {
        res.send(getRandomNumber(1, 6).toString());
    });

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

    app.use(proxy('localhost:8080', {
        limit: '5mb',
        filter: function (req) {
            const data = ['/code/'].some(path => req.path.includes(path));
            return data;
        }
    }));

    app.use('/checklist', express.static(`${__dirname}/services/checklist/src`));
    app.use('/json-ld', express.static(`${__dirname}/services/json-ld`));
    app.use('/rules', express.static(`${__dirname}/services/rules/src`));
    app.use('/dapp', express.static(`${__dirname}/services/dapp/src`));
    app.use('/wallet', express.static(`${__dirname}/services/wallet/src`));
    app.use('/mss', express.static(`${__dirname}/services/mss/src`));
    app.use('/welcomebook', express.static(`${__dirname}/services/welcomebook/src`));
    app.use('/mkb', express.static(`${__dirname}/services/mkb/src`));
    app.use( express.static(`${__dirname}/services/mkb/build`));
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
    });

    app.get(`/env.json`, async (req, res) => {
        res.status(200).sendFile(path.join(__dirname, 'env.json'))
    })

    app.get(`/env.mjs`, async (req, res) => {
        res.status(200).sendFile(path.join(__dirname, 'env.mjs'))
    })

    const dapp = env().DAPP

    console.log('@@@@@@@@@ dapp @@@@@@@@@', dapp)
    if(dapp === 'mss') {
        app.get(`/api/v1/recipients`, async (req, res) => {
            res.status(200).send({
                "code": "200",
                "recipients": [
                    "rmo",
                    "frmsr"
                ]
            })
        })

        //Моки для управления настройками подписок ИС
        app.get(`/api/v1/directory`, async (req, res) => {
            res.status(200).send({
                "code": "200",
                "relation": {
                    "id": "4c47d7s1-f38b-93f8-b18b-aa424921c242",
                    "headerId": "7c17d7s1-f38b-53f8-b18b-aa724921c245",
                    "directoryId": "5c37d7d1-f79b-43f8-b18b-aa039921c228",
                    "createdAt": "2022-01-01T10:00:15.333Z"
                }
            })
        })

        app.post(`/api/v1/subscription-settings`, async (req, res) => {
            res.status(200).send({
                "code": "201",
                "settings": [
                    {
                        "id": "3or8d2d1-f67b-60f8-s53b-dg23uy21c932",
                        "subscriptionId": "4or5d3d1-f73b-62f8-s33b-dg23uy21c237",
                        "headerId": "7c17d7s1-f38b-53f8-b18b-aa724921c245",
                        "value": "remd",
                        "active": true,
                        "createdAt": "2022-01-01T10:00:15.333Z",
                        "updatedAt": "Null"
                    },
                    {
                        "id": "5or8f2d1-ff7b-6hf8-s53b-dg23uy21c93j",
                        "subscriptionId": "4or5d3d1-f73b-62f8-s33b-dg23uy21c237",
                        "headerId": "uc17s7s2-f38b-e3f8-bq8b-aa7r4921c245",
                        "value": "35",
                        "active": true,
                        "createdAt": "2022-01-21T10:00:15.333Z",
                        "updatedAt": "Null"
                    },
                    {
                        "id": "7orh8f2d1-sf7b-6hf8-s52b-dg63u929c93j",
                        "subscriptionId": "4or5d3d1-f73b-62f8-s33b-dg23uy21c237",
                        "headerId": "jc14s7s2-f48b-e3f8-bh8b-ka7r4021c246",
                        "value": "121",
                        "active": true,
                        "createdAt": "2022-01-21T10:00:15.333Z",
                        "updatedAt": "Null"
                    },
                    {
                        "id": "6os8f2s1-fs7b-6kf8-s53b-dg43ky21a93j",
                        "subscriptionId": "4or5d3d1-f73b-62f8-s33b-dg23uy21c237",
                        "headerId": "5c17s6s2-f28b-e4f8-bq8b-aa8r4720c245",
                        "value": "REGISTRY_ITEM",
                        "active": true,
                        "createdAt": "2022-01-21T10:00:15.333Z",
                        "updatedAt": "Null"
                    }
                ]
            })
        })

        app.put(`/api/v1/subscription-settings`, async (req, res) => {
            res.status(200).send({
                "code": "200",
                "settings": [
                    {
                        "id": "3or8d2d1-f67b-60f8-s53b-dg23uy21c932",
                        "subscriptionId": "4or5d3d1-f73b-62f8-s33b-dg23uy21c237",
                        "headerId": "7c17d7s1-f38b-53f8-b18b-aa724921c245",
                        "value": "remd",
                        "active": false,
                        "createdAt": "2022-01-01T10:00:15.333Z",
                        "updatedAt": "Null"
                    },
                    {
                        "id": "5or8f2d1-ff7b-6hf8-s53b-dg23uy21c93j",
                        "subscriptionId": "4or5d3d1-f73b-62f8-s33b-dg23uy21c237",
                        "headerId": "uc17s7s2-f38b-e3f8-bq8b-aa7r4921c245",
                        "value": "35",
                        "active": false,
                        "createdAt": "2022-01-21T10:00:15.333Z",
                        "updatedAt": "Null"
                    },
                    {
                        "id": "7orh8f2d1-sf7b-6hf8-s52b-dg63u929c93j",
                        "subscriptionId": "4or5d3d1-f73b-62f8-s33b-dg23uy21c237",
                        "headerId": "jc14s7s2-f48b-e3f8-bh8b-ka7r4021c246",
                        "value": "121",
                        "active": false,
                        "createdAt": "2022-01-21T10:00:15.333Z",
                        "updatedAt": "Null"
                    },
                    {
                        "id": "6os8f2s1-fs7b-6kf8-s53b-dg43ky21a93j",
                        "subscriptionId": "4or5d3d1-f73b-62f8-s33b-dg23uy21c237",
                        "headerId": "5c17s6s2-f28b-e4f8-bq8b-aa8r4720c245",
                        "value": "REGISTRY_ITEM",
                        "active": false,
                        "createdAt": "2022-01-21T10:00:15.333Z",
                        "updatedAt": "Null"
                    }
                ]
            })
        })

        app.get(`/api/v1/subscription-settings`, async (req, res) => {
            res.status(200).send({
                "code": "200",
                "settings": [
                    {
                        "id": "3or8d2d1-f67b-60f8-s53b-dg23uy21c932",
                        "subscriptionId": "4or5d3d1-f73b-62f8-s33b-dg23uy21c237",
                        "headerId": "7c17d7s1-f38b-53f8-b18b-aa724921c245",
                        "value": "remd",
                        "active": false,
                        "createdAt": "2022-01-01T10:00:15.333Z",
                        "updatedAt": "Null"
                    },
                    {
                        "id": "5or8f2d1-ff7b-6hf8-s53b-dg23uy21c93j",
                        "subscriptionId": "4or5d3d1-f73b-62f8-s33b-dg23uy21c237",
                        "headerId": "uc17s7s2-f38b-e3f8-bq8b-aa7r4921c245",
                        "value": "35",
                        "active": false,
                        "createdAt": "2022-01-21T10:00:15.333Z",
                        "updatedAt": "Null"
                    },
                    {
                        "id": "7orh8f2d1-sf7b-6hf8-s52b-dg63u929c93j",
                        "subscriptionId": "4or5d3d1-f73b-62f8-s33b-dg23uy21c237",
                        "headerId": "jc14s7s2-f48b-e3f8-bh8b-ka7r4021c246",
                        "value": "121",
                        "active": false,
                        "createdAt": "2022-01-21T10:00:15.333Z",
                        "updatedAt": "Null"
                    },
                    {
                        "id": "6os8f2s1-fs7b-6kf8-s53b-dg43ky21a93j",
                        "subscriptionId": "4or5d3d1-f73b-62f8-s33b-dg23uy21c237",
                        "headerId": "5c17s6s2-f28b-e4f8-bq8b-aa8r4720c245",
                        "value": "REGISTRY_ITEM",
                        "active": false,
                        "createdAt": "2022-01-21T10:00:15.333Z",
                        "updatedAt": "Null"
                    }
                ]
            })
        })

        app.post(`/api/v1/subscription`, async (req, res) => {
            res.status(200).send({
                "code": "201",
                "subscription":
                    {
                        "id": "4or5d3d1-f73b-62f8-s33b-dg23uy21c237",
                        "recipientId": "2c17d7d1-f39b-53f8-b18b-aa739921c215",
                        "interactionId": "4c47d7d1-f69b-53f8-b18b-aa039921c224",
                        "active": true,
                        "startDate": "2023-01-10T14:00:15.333Z",
                        "endDate": "Null",
                        "createdAt": "2022-01-01T10:00:15.333Z",
                        "updatedAt": "Null"
                    }
            })
        });

        app.put(`/api/v1/subscription`, async (req, res) => {
            res.status(200).send({
                "code": "200",
                "subscription":
                    {
                        "id": "4or5d3d1-f73b-62f8-s33b-dg23uy21c237",
                        "recipientId": "2c17d7d1-f39b-53f8-b18b-aa739921c215",
                        "interactionId": "4c47d7d1-f69b-53f8-b18b-aa039921c224",
                        "active": false,
                        "startDate": "2023-01-10T14:00:15.333Z",
                        "endDate": "2022-10-31T14:00:15.333Z",
                        "createdAt": "2022-01-01T10:00:15.333Z",
                        "updatedAt": "2022-10-31T14:00:15.333Z"
                    }
            })
        });

        app.get(`/api/v1/subscriptions`, async (req, res) => {
            res.status(200).send({
                "code": "200",
                "subscriptions": [
                    {
                        "id": "9or3d3d1-f53b-62f8-s38b-gs23uy21c237",
                        "recipientId": "8u33d7d1-f43b-74f8-s38b-gg23uy21c237",
                        "interactionId": "4c47d7d1-f69b-53f8-b18b-aa039921c224",
                        "headerId": "6u33d7d1-f33b-64f8-s38b-gs23uy21c237",
                        "active": false,
                        "startDate": "2023-01-10T14:00:15.333Z",
                        "endDate": "2022-10-31T14:00:15.333Z",
                        "createdAt": "2022-01-01T10:00:15.333Z",
                        "updatedAt": "2022-10-31T14:00:15.333Z"
                    },
                    {
                        "id": "4or5d3d1-f73b-62f8-s33b-dg23uy21c237",
                        "recipientId": "2c17d7d1-f39b-53f8-b18b-aa739921c215",
                        "interactionId": "8c47d8d1-f79b-53f8-b10b-aa037921c094",
                        "active": true,
                        "startDate": "2023-01-10T14:00:15.333Z",
                        "endDate": "Null",
                        "createdAt": "2022-01-01T10:00:15.333Z",
                        "updatedAt": "Null"
                    },
                    {
                        "id": "98r243d1-f53b-62f8-s38b-gt23wy21c237",
                        "recipientId": "8u33d7d1-f43b-74f8-s38b-gg23uy21c237",
                        "interactionId": "8c47d8d1-f79b-53f8-b10b-aa037921c094",
                        "active": true,
                        "startDate": "2023-01-10T14:00:15.333Z",
                        "endDate": "2023-12-31T23:59:59.333Z",
                        "createdAt": "2022-01-01T10:00:15.333Z",
                        "updatedAt": "Null"
                    }
                ]
            })
        });

        app.post(`/api/v1/rule`, async (req, res) => {
            res.status(200).send({
                "code": "201",
                "rule":
                    {
                        "id": "9or3d3d1-f53b-62f8-s38b-gs23uy21c237",
                        "interactionId": "4c47d7d1-f69b-53f8-b18b-aa039921c224",
                        "headerId": "6u33d7d1-f33b-64f8-s38b-gs23uy21c237",
                        "active": true,
                        "createdAt": "2022-12-10T14:00:15.333Z",
                        "updatedAt": "Null"
                    }
            })
        });

        app.put(`/api/v1/rule`, async (req, res) => {
            res.status(200).send({
                "code": "200",
                "rule":
                    {
                        "id": "9or3d3d1-f53b-62f8-s38b-gs23uy21c237",
                        "interactionId": "4c47d7d1-f69b-53f8-b18b-aa039921c224",
                        "headerId": "6u33d7d1-f33b-64f8-s38b-gs23uy21c237",
                        "active": false,
                        "createdAt": "2022-12-10T14:00:15.333Z",
                        "updatedAt": "2022-12-11T15:00:15.333Z"
                    }
            })
        });

        app.get(`/api/v1/rules`, async (req, res) => {
            res.status(200).send({
                "code": "200",
                "rules": [
                    {
                        "id": "9or3d3d1-f53b-62f8-s38b-gs23uy21c237",
                        "interactionId": "4c47d7d1-f69b-53f8-b18b-aa039921c224",
                        "headerId": "6u33d7d1-f33b-64f8-s38b-gs23uy21c237",
                        "active": false,
                        "createdAt": "2022-12-10T14:00:15.333Z",
                        "updatedAt": "2022-12-11T15:00:15.333Z"
                    },
                    {
                        "id": "6orer3d1-d53b-6ff8-sg8b-gs23hy21c237",
                        "interactionId": "4c47d7d1-f69b-53f8-b18b-aa039921c224",
                        "headerId": "5u366ed1-f35b-65f8-s38b-gs18uy21c237",
                        "active": true,
                        "createdAt": "2022-12-10T14:00:15.333Z",
                        "updatedAt": "Null"
                    }]
            })
        });

        app.get(`/api/v1/directories`, async (req, res) => {
            res.status(200).send({
                "code": "200",
                "directory": [
                    {
                        "id": "5c37d7d1-f79b-43f8-b18b-aa039921c228",
                        "name": "Информационные системы"
                    },
                    {
                        "id": "6c37d7d1-w79b-43f8-b58b-aa069921g248",
                        "name": "Информационные взаимодействия"
                    },
                    {
                        "id": "7c39d7d1-f74b-63f8-b18b-aa239321c234",
                        "name": "Виды документов"
                    },
                    {
                        "id": "lsdfscit9d9d1-h79b-93f8-b17b-aa038921c568",
                        "name": "Медицинские организации"
                    },
                    {
                        "id": "55555lcit7d9d1-h79b-93f8-b17b-aa038921c568",
                        "name": "Заголовки сообщений"
                    },
                    {
                        "id": "3cit7d6d1-879b-93f9-b17b-aw018921c668",
                        "name": "Действия с ЭМД"
                    }
                ]
            })
        });

        app.get(`/api/v1/records`, async (req, res) => {
            res.status(200).send({
                "code": "200",
                "directoryId": "5c37d7d1-f79b-43f8-b18b-aa039921c228",
                "records": [
                    {
                        "id": "7u39d7d1-f23b-63f8-b38b-ga239321c237",
                        "code": "remd",
                        "name": "РЭМД",
                        "active": true,
                        "createdAt": "2022-12-10T14:00:15.333Z",
                        "updatedAt": "Null"
                    },
                    {
                        "id": "5t39d7d1-f23b-03f8-b38b-gf239321c239",
                        "code": "rmo",
                        "name": "РMO",
                        "active": false,
                        "createdAt": "2022-12-10T14:00:15.333Z",
                        "updatedAt": "2022-12-23T10:00:10.333Z"
                    },
                    {
                        "id": "9u39s6d1-f53b-13f8-b38b-ga23h321c237",
                        "code": "frmsr",
                        "name": "ФРМСР",
                        "active": true,
                        "createdAt": "2022-12-13T10:00:10.333Z",
                        "updatedAt": "Null"
                    }]
            })
        });

        app.post(`/api/v1/add-record`, async (req, res) => {
            res.status(200).send(
                {
                    "code": "200",
                    "directoryId": "5c37d7d1-f79b-43f8-b18b-aa039921c228",
                    "record":
                        {
                            "id": "7u39d7d1-f23b-63f8-b38b-ga239321c237",
                            "code": "remd",
                            "name": "РЭМД",
                            "active": true,
                            "createdAt": "2022-12-10T14:00:15.333Z",
                            "updatedAt": "Null"
                        }
                })
        });

        app.put(`/api/v1/record`, async (req, res) => {
            res.status(200).send({
                "code": "200",
                "directoryId": "5c37d7d1-f79b-43f8-b18b-aa039921c228",
                "record":
                    {
                        "id": "7u39d7d1-f23b-63f8-b38b-ga239321c237",
                        "code": "remd",
                        "name": "РЭМД",
                        "active": false,
                        "createdAt": "2022-12-10T14:00:15.333Z",
                        "updatedAt": "2022-12-11T15:00:15.333Z"
                    }
            })
        });
    }

    app.use(proxy('http://svc-fer-dev.helpms.ru:3333', {
        limit: '5mb',
        filter: function (req) {
            const data = ['/v1/'].some(path => req.path.startsWith(path));
            return dapp === 'mss' ? data : false;;
        }
    }));

    app.use(proxy('http://svc-fer-dev.helpms.ru:3333', {
        limit: '5mb',
        filter: function (req) {
            const data = ['/v1/'].some(path => req.path.startsWith(path));
            return dapp === 'rules' ? data : false;
        }
    }));

    app.use(proxy('https://mkb11-compose-dev.digitalms.ru', {
        limit: '5mb',
        filter: function(req) {
            const data = ['/v1/'].some(path => req.path.includes(path))
            return dapp === 'mkb' ? data : false;
        }
    }));

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

    app.get(`/*`, async (req, res) => {
        // console.log('index ----- index', __dirname)
        res.status(200).sendFile(path.join(__dirname, '/docs/index.html'));
    });

    app.post(`/*`, async (req, res) => {
        console.log('==== POST ====', req.path);
    });

    app.use(queue.getErrorMiddleware());

    return app
}

export default {
    description: 'server welcomebook'
};