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
