import React from 'react';
import PropTypes from 'prop-types';
import helper from '../../../../helper';

const Ratings = ({ meta }) => {
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
    const r = meta.recommended;
    const recommended = Math.round((Number(r.true) / (Number(r.false) + Number(r.true))) * 100);
    const numOfReviews = helper.findNumOfReviews(meta.ratings);

    return (
      <div className="ratings-section">
        <h2>RATINGS & REVIEWS</h2>
        <div>
          {(Math.round(helper.findAverageRating(meta.ratings) * 10) / 10).toFixed(1)}
          {'  '}
          <span className="stars" style={{ '--rating': helper.findStarRating(meta.ratings) }} />
        </div>
        <h3>Rating Breakdown</h3>
        <div>
          {'5 stars  '}
          <span className="bar" style={{ '--count': meta.ratings['5'], '--total': numOfReviews }}>
            {'  '}
            <span>
              {meta.ratings['5']}
            </span>
          </span>
        </div>
        <div>
          {'4 stars  '}
          <span className="bar" style={{ '--count': meta.ratings['4'], '--total': numOfReviews }}>
            {'  '}
            <span>
              {meta.ratings['4']}
            </span>
          </span>
        </div>
        <div>
          {'3 stars  '}
          <span className="bar" style={{ '--count': meta.ratings['3'], '--total': numOfReviews }}>
            {'  '}
            <span>
              {meta.ratings['3']}
            </span>
          </span>
        </div>
        <div>
          {'2 stars  '}
          <span className="bar" style={{ '--count': meta.ratings['2'], '--total': numOfReviews }}>
            {'  '}
            <span>
              {meta.ratings['2']}
            </span>
          </span>
        </div>
        <div>
          {'1 stars  '}
          <span className="bar" style={{ '--count': meta.ratings['1'], '--total': numOfReviews }}>
            {'  '}
            <span>
              {meta.ratings['1']}
            </span>
          </span>
        </div>
        <div>
          {recommended}
          {' % of reviewers recommend this product'}
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
};

Ratings.propTypes = {
  meta: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
  ).isRequired,
};

export default Ratings;
