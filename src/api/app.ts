const express = require('express');
const cors = require('cors');
const dbConnection = require('../models/connection.ts');

const routes = require('../routes/index.ts');

const app = express();

dbConnection();

app.get('/', (_req: any, res: any) => res.json({ message: 'API connected' }));

app.use(cors());

app.use(express.json());

app.use(routes);

module.exports = app;
