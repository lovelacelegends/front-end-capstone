import React from 'react';

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
          <div>248 reviews, sorted by relevance v</div>
          {reviews.results.map((review, index) => (
            <div className="review" key={index}>
              <div>Rating: {review.rating}</div>
              <header>{review.summary}</header>
              <p>...leftover summary</p>
              <p>{review.body}</p>
              <span>{review.helpfulness} people found this review helpful</span>
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

export default Reviews;
