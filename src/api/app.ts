const express = require('express');

const routes = require('../routes/index.ts');

const app = express();

app.get('/', (_req, res) => res.send('<h1>Home</h1>'));

app.use(express.json());

app.use(routes);

module.exports = app;
