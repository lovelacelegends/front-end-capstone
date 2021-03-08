import React from 'react';
import PropTypes from 'prop-types';
import ReviewModal from './ReviewModal';

class Reviews extends React.Component {
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
    this.setState((prevState) => ({
      reviewCount: prevState.reviewCount + 2,
    }));
  }

  resetReviewCount() {
    this.setState({
      reviewCount: 2,
    });
  }

  toggleModal() {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  }

  render() {
    const { reviews, meta } = this.props;
    const { reviewCount, showModal } = this.state;

    if (Object.keys(reviews).length !== 0) {
      return (
        <div className="reviews-section">
          <div>
            {reviews.results.length}
            {' reviews, sorted by '}
            <select>
              <option>relevance</option>
              <option>newest</option>
              <option>helpful</option>
            </select>
          </div>
          <div className="reviews-container">
            {reviews.results.map((review, index) => {
              if (index < reviewCount) {
                return (
                  <div className="review" key={review.review_id}>
                    <div>
                      <span className="stars" style={{ '--rating': review.rating }} />
                      {'  '}
                      <span>{review.reviewer_name}</span>
                      {'  '}
                      <span>{review.date.substr(0, 10)}</span>
                    </div>
                    <h3>{review.summary}</h3>
                    <p>{review.body}</p>
                    <span>
                      {'Helpful? '}
                      <span>{'Yes '}</span>
                      (
                      {review.helpfulness}
                      )
                    </span>
                  </div>
                );
              }

              return null;
            })}
          </div>
          <button type="button" onClick={this.handleMoreReviewsClick}>MORE REVIEWS</button>
          <button type="button" onClick={this.toggleModal}>ADD A REVIEW +</button>
          <ReviewModal
            showModal={showModal}
            toggleModal={this.toggleModal}
            meta={meta}
          />
        </div>
      );
    }

    return (
      <div>loading...</div>
    );
  }
}

Reviews.propTypes = {
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

export default Reviews;
