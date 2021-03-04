import React from 'react';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="reviews">
        <div>248 reviews, sorted by relevance v</div>
        <div className="review">
          <div>*****</div>
          <header>Review title with word-break truncation to prevent wrapping onto the next</header>
          <p>...line if necessary.</p>
          <p>Review bulk</p>
          <span>Helpful?</span>
          <span>Yes (10)</span>
          <span>No (5)</span>
          |
          <span>Report</span>
        </div>
        <div className="review">
          <div>****</div>
          <header>Review title with word-break truncation to prevent wrapping onto the next</header>
          <p>...line if necessary.</p>
          <p>Review bulk</p>
          <span>Helpful?</span>
          <span>Yes (8)</span>
          <span>No (7)</span>
          |
          <span>Report</span>
        </div>
        <button type="button">MORE REVIEWS</button>
        <button type="button">ADD A REVIEW +</button>
      </div>
    );
  }
}

export default Reviews;
