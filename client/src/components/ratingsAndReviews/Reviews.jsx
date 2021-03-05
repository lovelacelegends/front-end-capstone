import React from 'react';
import PropTypes from 'prop-types';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayAmount: 2,
    };

    this.handleMoreReviewsClick = this.handleMoreReviewsClick.bind(this);
  }

  handleMoreReviewsClick() {
    this.setState((prevState) => ({
      displayAmount: prevState.displayAmount + 2,
    }));
  }

  render() {
    const { reviews } = this.props;
    const { displayAmount } = this.state;

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
              if (index < displayAmount) {
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
                      {review.helpfulness}
                      {' people found this review helpful'}
                    </span>
                  </div>
                );
              }

              return null;
            })}
          </div>
          <button type="button" onClick={this.handleMoreReviewsClick}>MORE REVIEWS</button>
          <button type="button">ADD A REVIEW +</button>
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
};

export default Reviews;
