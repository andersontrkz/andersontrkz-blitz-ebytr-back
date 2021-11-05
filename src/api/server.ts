const server = require('./app.ts');

require('dotenv').config();

const { PORT } = process.env;

server.listen(PORT, () => console.log(`Running at port ${PORT}`));
