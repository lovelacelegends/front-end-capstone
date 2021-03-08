import React from 'react';
import PropTypes from 'prop-types';
import helper from '../../../../helper';

const Ratings = (props) => {
  const { meta } = props;

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
            disabled="true"
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
            disabled="true"
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
            disabled="true"
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
            disabled="true"
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
            disabled="true"
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
            disabled="true"
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
        <br />
        <div>
          {recommended}
          % of reviewers recommend this product
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
};

export default Ratings;
