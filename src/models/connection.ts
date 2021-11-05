const mongoose = require('mongoose');

require('dotenv').config();

const { MONGO_DB_URL, DB_NAME } = process.env;

const db = `${MONGO_DB_URL}/${DB_NAME}`;

const connection = () => mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

module.exports = connection;
