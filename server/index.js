const express = require('express');
const path = require('path');
const atlier = require('./atlier');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// app.get('/', (req, res) => {
// });

app.get('/products/:id', (req, res) => {
  atlier.getProductById(req.params.id)
    .then((productResults) => {
      const data = [productResults];

      atlier.getProductStylesById(req.params.id)
        .then((stylesResult) => {
          data.push(stylesResult);

          atlier.getRelatedProductsById(req.params.id)
            .then((relatedResult) => {
              data.push(relatedResult);
              res.status(201).send(data);
            });
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

app.get('/related/:id', (req, res) => {
  const relatedData = {};
  atlier.getProductById(req.params.id)
    .then((productInfo) => {
      relatedData.id = productInfo.id;
      relatedData.name = productInfo.name;
      relatedData.category = productInfo.category;
      relatedData.price = productInfo.default_price;
      relatedData.features = productInfo.features;

      atlier.getProductStylesById(req.params.id)
        .then((productStyles) => {
          const defaultStyle = productStyles.results[0];
          const defaultPictureURL = defaultStyle.photos[0].url;

          relatedData.url = defaultPictureURL;

          atlier.getMetaReviewsById(req.params.id)
            .then((metaReviewData) => {
              const ratingsObj = metaReviewData.ratings;

              relatedData.ratings = ratingsObj;
              res.status(200).send(relatedData);
            });
        });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

const PORT = 3000;
app.listen(PORT);
