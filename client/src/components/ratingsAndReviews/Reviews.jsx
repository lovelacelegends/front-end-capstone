import React from 'react';
import PropTypes from 'prop-types';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { reviews } = this.props;

    if (Object.keys(reviews).length !== 0) {
      return (
        <div className="reviews">
          <div>
            {reviews.results.length}
            {' reviews, sorted by '}
            <select>
              <option>relevance</option>
              <option>newest</option>
              <option>helpful</option>
            </select>
          </div>
          {reviews.results.map((review) => (
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
          ))}
          <button type="button">MORE REVIEWS</button>
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
