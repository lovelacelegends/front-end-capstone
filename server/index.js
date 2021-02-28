const express = require('express');
const path = require('path');
const atlier = require('./atlier');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
});

app.get('/products/:id', (req, res) => {
  atlier.getProductById(req.params.id)
    .then((productResults) => {
      const data = [productResults];

      atlier.getProductStylesById(req.params.id)
        .then((stylesResult) => {
          data.push(stylesResult);
          res.status(201).send(data);
        });
    })
    .catch((error) => {
      res.status(501).send(error);
    });
});

app.get('/reviews/:id', (req, res) => {
  atlier.getReviewsById(req.params.id)
    .then((results) => {
      res.status(201).send(results);
    })
    .catch((error) => {
      res.status(501).send(error);
    });
});

const PORT = 3000;
app.listen(PORT);
