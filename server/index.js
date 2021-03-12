const express = require('express');
const path = require('path');
const atlier = require('./atlier');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/products/:id', (req, res) => {
  const { id } = req.params;

  Promise.all([
    atlier.getProductById(id),
    atlier.getProductStylesById(id),
    atlier.getRelatedProductsById(id),
    atlier.getReviewsById(id),
    atlier.getMetaReviewsById(id),
  ])
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((error) => {
      res.status(501).send(error);
    });
});

app.get('/related/:id', (req, res) => {
  const { id } = req.params;

  Promise.all([
    atlier.getProductById(id),
    atlier.getProductStylesById(id),
    atlier.getMetaReviewsById(id),
  ])
    .then((data) => {
      const relatedData = {
        id: data[0].id,
        name: data[0].name,
        category: data[0].category,
        price: data[0].default_price,
        features: data[0].features,
        url: data[1].results[0].photos[0].url,
        ratings: data[2].ratings,
      };

      res.status(201).send(relatedData);
    })
    .catch((error) => {
      res.status(501).send(error);
    });
});

app.get('/reviews/:id', (req, res) => {
  const { id, sort } = req.query;

  Promise.all([
    atlier.getReviewsById(id, sort),
    atlier.getMetaReviewsById(id),
  ])
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((error) => {
      res.status(501).send(error);
    });
});

app.get('/reviews/meta', (req, res) => {
  const { id } = req.params;

  atlier.getMetaReviewsById(id)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((error) => {
      res.status(501).send(error);
    });
});

app.post('/cart', (req, res) => {
  atlier.addToCart(req.body)
    .then((response) => {
      res.status(200);
      res.send(response);
    })
    .catch((error) => {
      res.status(400);
      res.send(error);
    });
});

app.post('/reviews', (req, res) => {
  const { body } = req;

  atlier.postReviewByProductId(body)
    .then((data) => {
      res.status(201).send(data.data);
    })
    .catch((error) => {
      res.status(501).send(error);
    });
});

app.put('/reviews/:id/helpful', (req, res) => {
  const { id } = req.params;

  atlier.markReviewAsHelpful(id)
    .then((data) => {
      res.status(204).send(data.data);
    })
    .catch((error) => {
      res.status(501).send(error);
    });
});

app.put('/reviews/:id/report', (req, res) => {
  const { id } = req.params;

  atlier.reportReview(id)
    .then((data) => {
      res.status(204).send(data.data);
    })
    .catch((error) => {
      res.status(501).send(error);
    });
});

const PORT = 3000;
app.listen(PORT);
