import React from 'react';

class Ratings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { meta } = this.props;

    if (Object.keys(meta).length !== 0) {
      // find average rating
      let numOfReviews = 0;
      let totalScore = 0;

      for (let rating in meta.ratings) {
        numOfReviews += Number(meta.ratings[rating]);
        totalScore += Number(rating) * Number(meta.ratings[rating]);
      }

      const averageRating = (Math.round((totalScore / numOfReviews) * 10) / 10).toFixed(1);

      // find % of reviewers that recommend
      const recommended = Math.round((Number(meta.recommended.true) / (Number(meta.recommended.false) + Number(meta.recommended.true))) * 100);

      return (
        <div className="ratings">
          <div>RATINGS & REVIEWS</div>
          <div>Average: {averageRating}</div>
          <div>{recommended}% of reviewers recommend this product</div>
          <div>5 stars : {meta.ratings['5']}</div>
          <div>4 stars : {meta.ratings['4']}</div>
          <div>3 stars : {meta.ratings['3']}</div>
          <div>2 stars : {meta.ratings['2']}</div>
          <div>1 stars : {meta.ratings['1']}</div>
          <div>Fit: {meta.characteristics.Fit.value}</div>
          <div>Length: {meta.characteristics.Length.value}</div>
          <div>Comfort: {meta.characteristics.Comfort.value}</div>
          <div>Quality: {meta.characteristics.Quality.value}</div>
        </div>
      );
    }

    return (
      <div>loading...</div>
    );
  }
}

export default Ratings;
