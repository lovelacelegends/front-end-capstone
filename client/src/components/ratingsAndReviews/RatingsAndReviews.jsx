import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Ratings from './Ratings';
import Reviews from './Reviews';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewCount: 2,
      showModal: false,
    };

    this.addToReviewsCount = this.addToReviewsCount.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.markReviewAsHelpful = this.markReviewAsHelpful.bind(this);
  }

  addToReviewsCount() {
    this.setState((prevState) => ({
      reviewCount: prevState.reviewCount + 2,
    }));
  }

  toggleModal() {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  }

  markReviewAsHelpful() {
    const { selectedProduct } = this.props;

    axios.put(`/reviews/${selectedProduct.id}/helpful`)
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }

  render() {
    const {
      selectedProduct,
      reviews,
      meta,
    } = this.props;

    const {
      reviewCount,
      showModal,
    } = this.state;

    return (
      <div className="ratings-and-reviews">
        <Ratings meta={meta} />
        <Reviews
          selectedProduct={selectedProduct}
          reviews={reviews}
          meta={meta}
          reviewCount={reviewCount}
          showModal={showModal}
          addToReviewsCount={this.addToReviewsCount}
          toggleModal={this.toggleModal}
          markReviewAsHelpful={this.markReviewAsHelpful}
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
