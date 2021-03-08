import React from 'react';
import PropTypes from 'prop-types';

import Ratings from './Ratings';
import Reviews from './Reviews';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      selectedProduct,
      reviews,
      meta
    } = this.props;

    return (
      <div className="ratings-and-reviews">
        <Ratings meta={meta} />
        <Reviews
          selectedProduct={selectedProduct}
          reviews={reviews}
          meta={meta}
        />
      </div>
    );
  }
}

RatingsAndReviews.propTypes = {
  selectedProduct: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
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
