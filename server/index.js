const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.status(200).send('HEY');
});

app.get('/banana', (req, res) => {
  res.status(200).send('HEY');
});

const PORT = 3000;
app.listen(PORT);
