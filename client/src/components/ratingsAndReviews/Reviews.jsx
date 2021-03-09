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
    handleMoreReviewsClick,
    toggleModal,
  } = props;

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
            const response = review.response ? <h4>{review.response}</h4> : null;
            const recommend = review.recommend ? <div>I recommend this product</div> : null;
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
                    <span>{review.date.substr(0, 10)}</span>
                  </div>
                  <h3>{review.summary}</h3>
                  <p>{review.body}</p>
                  {recommend}
                  {response}
                  {photos}
                  <br />
                  <span>
                    {'Helpful? '}
                    <span>
                      Yes
                      (
                      {review.helpfulness}
                      )
                    </span>
                    {' Report'}
                  </span>
                </div>
              );
            }

            return null;
          })}
        </div>
        <button
          type="button"
          onClick={handleMoreReviewsClick}
          style={{ visibility: (reviewCount < reviews.results.length) ? 'visible' : 'hidden' }}
        >
          MORE REVIEWS
        </button>
        <button type="button" onClick={toggleModal}>ADD A REVIEW +</button>
        <ReviewModal
          selectedProduct={selectedProduct}
          showModal={showModal}
          toggleModal={toggleModal}
          meta={meta}
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
  handleMoreReviewsClick: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default Reviews;
