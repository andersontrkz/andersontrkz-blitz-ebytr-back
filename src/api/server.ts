const server = require('./app.ts');

const PORT = 3000;

server.listen(PORT, () => console.log(`Running at port ${PORT}`));
