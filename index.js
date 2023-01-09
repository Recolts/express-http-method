const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send({ message: 'get app' }));
app.post('/', (req, res) => res.send({ message: 'create app' }));
app.patch('/', (req, res) => res.send({ message: 'update app' }));
app.delete('/', (req, res) => res.send({ message: 'delete app' }));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));