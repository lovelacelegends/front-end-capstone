import React from 'react';
import PropTypes from 'prop-types';

import Ratings from './Ratings';
import Reviews from './Reviews';

const RatingsAndReviews = ({ reviews, meta }) => (
  <div className="ratings-and-reviews">
    <Ratings meta={meta} />
    <Reviews reviews={reviews} />
  </div>
);

RatingsAndReviews.propTypes = {
  reviews: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
  meta: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
  ).isRequired,
};

export default RatingsAndReviews;
