const express = require('express');
const path = require('path');
const atlier = require('./atlier');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// app.get('/', (req, res) => {
// });

app.get('/products/:id', (req, res) => {
  const data = [null, null, null, null];
  const { id } = req.params;

  atlier.getProductById(id)
    .then((products) => {
      data[0] = products;
      return atlier.getProductStylesById(id);
    })
    .then((styles) => {
      data[1] = styles;
      return atlier.getRelatedProductsById(id);
    })
    .then((relatedProducts) => {
      data[2] = relatedProducts;
      return atlier.getReviewsById(id);
    })
    .then((reviews) => {
      data[3] = reviews;
    })
    .catch((error) => {
      res.status(501).send(error);
    })
    .finally(() => {
      res.status(201).send(data);
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
