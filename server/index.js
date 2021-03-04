const express = require('express');
const path = require('path');
const atlier = require('./atlier');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// app.get('/', (req, res) => {
// });

app.get('/products/:id', (req, res) => {
  const { id } = req.params;

  const p1 = atlier.getProductById(id);
  const p2 = atlier.getProductStylesById(id);
  const p3 = atlier.getRelatedProductsById(id);
  const p4 = atlier.getReviewsById(id);
  const p5 = atlier.getMetaReviewsById(id);

  Promise.all([p1, p2, p3, p4, p5])
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((error) => {
      res.status(501).send(error);
    });
});

app.get('/related/:id', (req, res) => {
  const { id } = req.params;

  const p1 = atlier.getProductById(id);
  const p2 = atlier.getProductStylesById(id);
  const p3 = atlier.getMetaReviewsById(id);

  Promise.all([p1, p2, p3])
    .then((data) => {
      const relatedData = {};

      relatedData.id = data[0].id;
      relatedData.name = data[0].name;
      relatedData.category = data[0].category;
      relatedData.price = data[0].default_price;
      relatedData.features = data[0].features;
      relatedData.url = data[1].results[0].photos[0].url;
      relatedData.ratings = data[2].ratings;

      res.status(201).send(relatedData);
    })
    .catch((error) => {
      res.status(501).send(error);
    });
});

const PORT = 3000;
app.listen(PORT);
