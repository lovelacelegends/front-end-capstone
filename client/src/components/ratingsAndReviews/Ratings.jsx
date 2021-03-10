import React from 'react';
import PropTypes from 'prop-types';
import helper from '../../../../helper';

const Ratings = (props) => {
  const {
    meta,
    filterByRating,
    showRatings,
  } = props;

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
          Size
          <br />
          <input
            type="range"
            min="1"
            max="5"
            value={meta.characteristics.Size.value}
            disabled
          />
        </div>
      );
    }
    if (meta.characteristics.Width) {
      width = (
        <div>
          Width
          <br />
          <input
            type="range"
            min="1"
            max="5"
            value={meta.characteristics.Width.value}
            disabled
          />
        </div>
      );
    }
    if (meta.characteristics.Comfort) {
      comfort = (
        <div>
          Comfort
          <br />
          <input
            type="range"
            min="1"
            max="5"
            value={meta.characteristics.Comfort.value}
            disabled
          />
        </div>
      );
    }
    if (meta.characteristics.Quality) {
      quality = (
        <div>
          Quality
          <br />
          <input
            type="range"
            min="1"
            max="5"
            value={meta.characteristics.Quality.value}
            disabled
          />
        </div>
      );
    }
    if (meta.characteristics.Length) {
      length = (
        <div>
          Length
          <br />
          <input
            type="range"
            min="1"
            max="5"
            value={meta.characteristics.Length.value}
            disabled
          />
        </div>
      );
    }
    if (meta.characteristics.Fit) {
      fit = (
        <div>
          Fit
          <br />
          <input
            type="range"
            min="1"
            max="5"
            value={meta.characteristics.Fit.value}
            disabled
          />
        </div>
      );
    }
  }

  if (Object.keys(meta).length !== 0) {
    if (!meta.ratings['5']) meta.ratings['5'] = '0';
    if (!meta.ratings['4']) meta.ratings['4'] = '0';
    if (!meta.ratings['3']) meta.ratings['3'] = '0';
    if (!meta.ratings['2']) meta.ratings['2'] = '0';
    if (!meta.ratings['1']) meta.ratings['1'] = '0';

    const r = meta.recommended;
    if (!r.true) r.true = '0';
    if (!r.false) r.false = '0';

    const recommended = Math.round((Number(r.true) / (Number(r.false) + Number(r.true))) * 100);
    const numOfReviews = helper.findNumOfReviews(meta.ratings);

    return (
      <div className="ratings-section">
        <h2>RATINGS & REVIEWS</h2>
        <div className="average-rating">
          {(Math.round(helper.findAverageRating(meta.ratings) * 10) / 10).toFixed(1)}
          {'  '}
          <span
            className="stars"
            style={{
              '--rating': helper.findStarRating(meta.ratings), '--star-size': '30px',
            }}
          />
        </div>
        <h3>Rating Breakdown</h3>
        <div
          className={`clickable ${showRatings['5'] ? 'ratings-highlight' : 'ratings-highlight-hover'}`}
          onClick={() => {
            filterByRating('5');
          }}
          onKeyPress={() => {
            filterByRating('5');
          }}
          role="button"
          tabIndex="0"
        >
          {'5 stars  '}
          <span className="bar" style={{ '--count': meta.ratings['5'], '--total': numOfReviews }} />
          {'  '}
          {meta.ratings['5']}
        </div>
        <div
          className={`clickable ${showRatings['4'] ? 'ratings-highlight' : 'ratings-highlight-hover'}`}
          onClick={() => {
            filterByRating('4');
          }}
          onKeyPress={() => {
            filterByRating('4');
          }}
          role="button"
          tabIndex="0"
        >
          {'4 stars  '}
          <span className="bar" style={{ '--count': meta.ratings['4'], '--total': numOfReviews }} />
          {'  '}
          {meta.ratings['4']}
        </div>
        <div
          className={`clickable ${showRatings['3'] ? 'ratings-highlight' : 'ratings-highlight-hover'}`}
          onClick={() => {
            filterByRating('3');
          }}
          onKeyPress={() => {
            filterByRating('3');
          }}
          role="button"
          tabIndex="0"
        >
          {'3 stars  '}
          <span className="bar" style={{ '--count': meta.ratings['3'], '--total': numOfReviews }} />
          {'  '}
          {meta.ratings['3']}
        </div>
        <div
          className={`clickable ${showRatings['2'] ? 'ratings-highlight' : 'ratings-highlight-hover'}`}
          onClick={() => {
            filterByRating('2');
          }}
          onKeyPress={() => {
            filterByRating('2');
          }}
          role="button"
          tabIndex="0"
        >
          {'2 stars  '}
          <span className="bar" style={{ '--count': meta.ratings['2'], '--total': numOfReviews }} />
          {'  '}
          {meta.ratings['2']}
        </div>
        <div
          className={`clickable ${showRatings['1'] ? 'ratings-highlight' : 'ratings-highlight-hover'}`}
          onClick={() => {
            filterByRating('1');
          }}
          onKeyPress={() => {
            filterByRating('1');
          }}
          role="button"
          tabIndex="0"
        >
          {'1 stars  '}
          <span className="bar" style={{ '--count': meta.ratings['1'], '--total': numOfReviews }} />
          {'  '}
          {meta.ratings['1']}
        </div>
        <br />
        <div>
          {recommended}
          % of customers recommend this product
        </div>
        <br />
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
  filterByRating: PropTypes.func.isRequired,
  showRatings: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.bool,
    ]),
  ).isRequired,
};

export default Ratings;
