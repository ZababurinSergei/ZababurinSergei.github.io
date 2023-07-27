const { init } = require('./tracing.cjs');
init('welcomebook', 'development');

const server = import('./server.mjs');
const express = require('express');
const app = express();

server.then((data) => {
    data.modules(app).catch(e => console.error(e));
});
