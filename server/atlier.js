const axios = require('axios');
const config = require('../config.js');

const baseURL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

const getProductById = (id) => {
  const options = {
    url: `${baseURL}/products/${id}`,
    headers: {
      'User-Agent': 'request',
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
      'User-Agent': 'request',
      Authorization: config.TOKEN,
    },
  };

  return axios(options)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

const getReviewsById = (id) => {
  const options = {
    url: `${baseURL}/reviews/`,
    headers: {
      'User-Agent': 'request',
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

module.exports = {
  getProductById,
  getProductStylesById,
  getReviewsById,
};
