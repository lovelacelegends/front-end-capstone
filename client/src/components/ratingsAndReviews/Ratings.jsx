import React from 'react';
import PropTypes from 'prop-types';

class Ratings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { meta } = this.props;
    let size;
    let width;
    let comfort;
    let quality;
    let length;
    let fit;

    if (meta.characteristics) {
      if (meta.characteristics.Size) {
        size = (
          <div>
            {'Size: '}
            {meta.characteristics.Size.value}
          </div>
        );
      }
      if (meta.characteristics.Width) {
        width = (
          <div>
            {'Width: '}
            {meta.characteristics.Width.value}
          </div>
        );
      }
      if (meta.characteristics.Comfort) {
        comfort = (
          <div>
            {'Comfort: '}
            {meta.characteristics.Comfort.value}
          </div>
        );
      }
      if (meta.characteristics.Quality) {
        quality = (
          <div>
            {'Quality: '}
            {meta.characteristics.Quality.value}
          </div>
        );
      }
      if (meta.characteristics.Length) {
        length = (
          <div>
            {'Length: '}
            {meta.characteristics.Length.value}
          </div>
        );
      }
      if (meta.characteristics.Fit) {
        fit = (
          <div>
            {'Fit: '}
            {meta.characteristics.Fit.value}
          </div>
        );
      }
    }

    if (Object.keys(meta).length !== 0) {
      // find average rating
      let numOfReviews = 0;
      let totalScore = 0;

      for (let i = 1; i <= Object.keys(meta.ratings).length; i += 1) {
        if (meta.ratings[i]) {
          numOfReviews += Number(meta.ratings[i]);
          totalScore += i * Number(meta.ratings[i]);
        } else {
          meta.ratings[i] = 0;
        }
      }

      const averageRating = (Math.round((totalScore / numOfReviews) * 10) / 10).toFixed(1);

      const averageRatingQuarter = Math.round(averageRating * 4) / 4;

      // find % of reviewers that recommend
      const r = meta.recommended;
      const recommended = Math.round((Number(r.true) / (Number(r.false) + Number(r.true))) * 100);

      return (
        <div className="ratings-section">
          <div>RATINGS & REVIEWS</div>
          <div>
            {averageRating}
            {'  '}
            <span className="stars" style={{ '--rating': averageRatingQuarter }} />
          </div>
          <h5>Rating Breakdown</h5>
          <div>
            {'5 stars  '}
            <span className="bar" style={{ '--count': meta.ratings['5'], '--total': numOfReviews }}>
              {'  '}
              {meta.ratings['5']}
            </span>
          </div>
          <div>
            {'4 stars  '}
            <span className="bar" style={{ '--count': meta.ratings['4'], '--total': numOfReviews }}>
              {'  '}
              {meta.ratings['4']}
            </span>
          </div>
          <div>
            {'3 stars  '}
            <span className="bar" style={{ '--count': meta.ratings['3'], '--total': numOfReviews }}>
              {'  '}
              {meta.ratings['3']}
            </span>
          </div>
          <div>
            {'2 stars  '}
            <span className="bar" style={{ '--count': meta.ratings['2'], '--total': numOfReviews }}>
              {'  '}
              {meta.ratings['2']}
            </span>
          </div>
          <div>
            {'1 stars  '}
            <span className="bar" style={{ '--count': meta.ratings['1'], '--total': numOfReviews }}>
              {'  '}
              {meta.ratings['1']}
            </span>
          </div>
          <div>
            {recommended}
            % of reviewers recommend this product
          </div>
          {size}
          {width}
          {comfort}
          {quality}
          {length}
          {fit}
        </div>
      );
    }

    return (
      <div>loading...</div>
    );
  }
}

Ratings.propTypes = {
  meta: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
  ).isRequired,
};

export default Ratings;
