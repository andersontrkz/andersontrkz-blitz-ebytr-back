import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (_req, res) => res.send('<h1>Home</h1>'));

app.listen(PORT, () => console.log(`Running at port ${PORT}`));
