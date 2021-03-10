const axios = require('axios');
const config = require('../config.js');

const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

const getProductById = (id) => {
  const options = {
    url: `${baseURL}/products/${id}`,
    headers: {
      Authorization: config.TOKEN,
    },
  };

  return axios(options)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

const getProductStylesById = (id) => {
  const options = {
    url: `${baseURL}/products/${id}/styles`,
    headers: {
      Authorization: config.TOKEN,
    },
  };

  return axios(options)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

const getReviewsById = (id, sort) => {
  const options = {
    url: `${baseURL}/reviews/`,
    headers: {
      Authorization: config.TOKEN,
    },
    params: {
      product_id: id,
      sort,
      count: 1000,
    },
  };

  return axios(options)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

const getMetaReviewsById = (id) => {
  const options = {
    url: `${baseURL}/reviews/meta/`,
    headers: {
      Authorization: config.TOKEN,
    },
    params: {
      product_id: id,
    },
  };

  return axios(options)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

const getRelatedProductsById = (id) => {
  const options = {
    url: `${baseURL}/products/${id}/related`,
    headers: {
      Authorization: config.TOKEN,
    },
  };

  return axios(options)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

const addToCart = () => {
  const options = {
    url: `${baseURL}/cart`,
    headers: {
      Authorization: config.TOKEN,
    },
  };

  return axios(options)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

const postReviewByProductId = (body) => {
  const options = {
    method: 'post',
    url: `${baseURL}/reviews`,
    headers: {
      Authorization: config.TOKEN,
    },
    data: body,
  };

  return axios(options)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
};

const markReviewAsHelpful = (id) => {
  const options = {
    method: 'PUT',
    url: `${baseURL}/reviews/${id}/helpful`,
    headers: {
      Authorization: config.TOKEN,
    },
    params: {
      review_id: id,
    },
  };

  return axios(options)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
};

const reportReview = (id) => {
  const options = {
    method: 'PUT',
    url: `${baseURL}/reviews/${id}/report`,
    headers: {
      Authorization: config.TOKEN,
    },
    params: {
      review_id: id,
    },
  };

  return axios(options)
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
};

module.exports = {
  getProductById,
  getProductStylesById,
  getReviewsById,
  getMetaReviewsById,
  getRelatedProductsById,
  addToCart,
  postReviewByProductId,
  markReviewAsHelpful,
  reportReview,
};
