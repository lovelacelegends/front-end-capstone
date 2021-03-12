import React from 'react';
import PropTypes from 'prop-types';
import ReviewModal from './ReviewModal';

const Reviews = (props) => {
  const {
    selectedProduct,
    reviews,
    meta,
    reviewCount,
    showModal,
    addToReviewsCount,
    toggleModal,
    markReviewAsHelpful,
    reportReview,
    getProductReviews,
    getMetaData,
    sort,
    changeSort,
    showRatings,
  } = props;

  if (Object.keys(reviews).length !== 0) {
    const filteredReviews = reviews.results.filter((review) => {
      if (
        !showRatings[5]
        && !showRatings[4]
        && !showRatings[3]
        && !showRatings[2]
        && !showRatings[1]
      ) return true;
      if (showRatings[5] && review.rating === 5) return true;
      if (showRatings[4] && review.rating === 4) return true;
      if (showRatings[3] && review.rating === 3) return true;
      if (showRatings[2] && review.rating === 2) return true;
      if (showRatings[1] && review.rating === 1) return true;

      return false;
    });

    return (
      <div className="reviews-section">
        <div
          style={{ textAlign: 'right', marginRight: '34px' }}
        >
          {reviews.results.length}
          {' reviews, sorted by '}
          <select
            className="review-select"
            onBlur={changeSort}
            onChange={changeSort}
          >
            <option value="relevant">relevance</option>
            <option value="newest">newest</option>
            <option value="helpful">helpful</option>
          </select>
        </div>
        <div className="reviews-container">
          {filteredReviews.map((review, index) => {
            const response = review.response ? (
              <p style={{ backgroundColor: 'lightgray' }}>
                {'Response from seller: '}
                {review.response}
              </p>
            ) : null;
            const recommend = review.recommend ? <p>I recommend this product.</p> : null;
            const photos = review.photos.length > 0 ? review.photos.map((photo) => (
              <img className="uploaded-photo" src={photo.url} alt="uploaded product" key={photo.id} />
            )) : null;

            if (index < reviewCount) {
              return (
                <div className="review" key={review.review_id}>
                  <div>
                    <span className="stars" style={{ '--rating': review.rating }} />
                    {'  '}
                    <span>{review.reviewer_name}</span>
                    {'  '}
                    <span
                      className="review-small-text"
                      style={{ float: 'right' }}
                    >
                      {review.date.substr(0, 10)}
                    </span>
                  </div>
                  <h3>{review.summary}</h3>
                  <p>{review.body}</p>
                  {recommend}
                  {response}
                  {photos}
                  <br />
                  <span className="review-small-text">
                    {'Helpful? '}
                    <span
                      onClick={() => {
                        markReviewAsHelpful(review, index);
                      }}
                      onKeyPress={() => {
                        markReviewAsHelpful(review, index);
                      }}
                      role="button"
                      tabIndex="0"
                    >
                      <span
                        className="clickable text-highlight"
                      >
                        Yes
                      </span>
                      (
                      {review.helpfulness}
                      )
                    </span>
                    {' | '}
                    <span
                      className="clickable text-highlight"
                      style={{ textDecoration: 'underline' }}
                      onClick={() => {
                        reportReview(review, index);
                      }}
                      onKeyPress={() => {
                        reportReview(review, index);
                      }}
                      role="button"
                      tabIndex="0"
                    >
                      {reviews.results[index].reported ? ' Reported' : ' Report'}
                    </span>
                  </span>
                </div>
              );
            }

            return null;
          })}
        </div>
        <button
          className="clickable review-button"
          type="button"
          onClick={addToReviewsCount}
          style={{ visibility: (reviewCount < filteredReviews.length) ? 'visible' : 'hidden' }}
        >
          MORE REVIEWS
        </button>
        <button
          className="clickable review-button"
          type="button"
          onClick={toggleModal}
        >
          ADD A REVIEW
        </button>
        <ReviewModal
          selectedProduct={selectedProduct}
          showModal={showModal}
          toggleModal={toggleModal}
          meta={meta}
          getProductReviews={getProductReviews}
          getMetaData={getMetaData}
          sort={sort}
        />
      </div>
    );
  }

  return (
    <div>loading...</div>
  );
};

Reviews.propTypes = {
  selectedProduct: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
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
  reviewCount: PropTypes.number.isRequired,
  showModal: PropTypes.bool.isRequired,
  addToReviewsCount: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  markReviewAsHelpful: PropTypes.func.isRequired,
  reportReview: PropTypes.func.isRequired,
  getProductReviews: PropTypes.func.isRequired,
  getMetaData: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
  changeSort: PropTypes.func.isRequired,
  showRatings: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.bool,
    ]),
  ).isRequired,
};

export default Reviews;
