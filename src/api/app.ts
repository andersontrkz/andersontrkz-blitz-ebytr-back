const express = require('express');

const app = express();

app.get('/', (_req, res) => res.send('<h1>Home</h1>'));

app.use(express.json());

module.exports = app;
