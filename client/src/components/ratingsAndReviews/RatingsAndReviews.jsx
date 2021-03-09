import React from 'react';
import PropTypes from 'prop-types';

import Ratings from './Ratings';
import Reviews from './Reviews';

class RatingsAndReviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviewCount: 2,
      showModal: false,
    };

    this.handleMoreReviewsClick = this.handleMoreReviewsClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handleMoreReviewsClick() {
    const { reviews } = this.props;
    const { reviewCount } = this.state;

    if (reviewCount + 2 >= reviews.results.length) {
      this.setState((prevState) => ({
        reviewCount: prevState.reviewCount + 2,
      }));
    } else {
      this.setState((prevState) => ({
        reviewCount: prevState.reviewCount + 2,
      }));
    }
  }

  toggleModal() {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
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
          handleMoreReviewsClick={this.handleMoreReviewsClick}
          toggleModal={this.toggleModal}
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
