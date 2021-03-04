import React from 'react';
import Ratings from './Ratings';
import Reviews from './Reviews';

const RatingsAndReviews = ({reviews, meta}) => (
  <div className="ratings-and-reviews">
    <Ratings meta={meta} />
    <Reviews reviews={reviews} />
  </div>
);

export default RatingsAndReviews;
