import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      ratingHover: 0,
      recommend: '',
      size: '',
      width: '',
      comfort: '',
      quality: '',
      length: '',
      fit: '',
      summary: '',
      body: '',
      name: '',
      email: '',
    };

    this.handleFormChange = this.handleFormChange.bind(this);
    this.submitReviewForm = this.submitReviewForm.bind(this);
  }

  handleFormChange(e) {
    let { value } = e.target;

    if (value === 'true') {
      value = true;
    } else if (value === 'false') {
      value = false;
    }

    this.setState({
      [e.target.name]: value,
    });
  }

  handleStarClick(value) {
    this.setState({
      rating: value,
    });
  }

  handleStarHover(value) {
    this.setState({
      ratingHover: value,
    });
  }

  handleStarUnhover() {
    this.setState({
      ratingHover: 0,
    });
  }

  submitReviewForm(e) {
    e.preventDefault();

    const {
      meta,
      toggleModal,
      getProductReviews,
      getMetaData,
      sort,
    } = this.props;

    const {
      rating,
      recommend,
      size,
      width,
      comfort,
      quality,
      length,
      fit,
      summary,
      body,
      name,
      email,
    } = this.state;

    const characteristics = {};

    for (let i = 0; i < Object.keys(meta.characteristics).length; i += 1) {
      const char = Object.keys(meta.characteristics)[i];
      const charId = meta.characteristics[Object.keys(meta.characteristics)[i]].id;

      if (char === 'Size') {
        characteristics[charId] = Number(size);
      }
      if (char === 'Width') {
        characteristics[charId] = Number(width);
      }
      if (char === 'Comfort') {
        characteristics[charId] = Number(comfort);
      }
      if (char === 'Quality') {
        characteristics[charId] = Number(quality);
      }
      if (char === 'Length') {
        characteristics[charId] = Number(length);
      }
      if (char === 'Fit') {
        characteristics[charId] = Number(fit);
      }
    }

    const review = {
      product_id: Number(meta.product_id),
      name,
      email,
      rating,
      recommend,
      characteristics,
      summary,
      body,
      photos: [],
    };

    axios.post('/reviews', review)
      .then(() => {
        toggleModal();
        getProductReviews(meta.product_id, sort);
        getMetaData(meta.product_id);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
        toggleModal();
      });
  }

  render() {
    const {
      selectedProduct,
      showModal,
      toggleModal,
      meta,
    } = this.props;

    const {
      rating,
      ratingHover,
      summary,
      body,
    } = this.state;

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
            <span>Size</span>
            <label htmlFor="size-1">
              <input
                type="radio"
                id="size-1"
                value="1"
                name="size"
                onClick={this.handleFormChange}
              />
              A size too small
            </label>
            <label htmlFor="size-2">
              <input
                type="radio"
                id="size-2"
                value="2"
                name="size"
                onClick={this.handleFormChange}
              />
              1/2 a size too small
            </label>
            <label htmlFor="size-3">
              <input
                type="radio"
                id="size-3"
                value="3"
                name="size"
                onClick={this.handleFormChange}
              />
              Perfect
            </label>
            <label htmlFor="size-4">
              <input
                type="radio"
                id="size-4"
                value="4"
                name="size"
                onClick={this.handleFormChange}
              />
              1/2 a size too big
            </label>
            <label htmlFor="size-5">
              <input
                type="radio"
                id="size-5"
                value="5"
                name="size"
                onClick={this.handleFormChange}
              />
              A size too wide
            </label>
          </div>
        );
      }
      if (meta.characteristics.Width) {
        width = (
          <div>
            <span>Width</span>
            <label htmlFor="width-1">
              <input
                type="radio"
                id="width-1"
                value="1"
                name="width"
                onClick={this.handleFormChange}
              />
              Too narrow
            </label>
            <label htmlFor="width-2">
              <input
                type="radio"
                id="width-2"
                value="2"
                name="width"
                onClick={this.handleFormChange}
              />
              Slightly narrow
            </label>
            <label htmlFor="width-3">
              <input
                type="radio"
                id="width-3"
                value="3"
                name="width"
                onClick={this.handleFormChange}
              />
              Perfect
            </label>
            <label htmlFor="width-4">
              <input
                type="radio"
                id="width-4"
                value="4"
                name="width"
                onClick={this.handleFormChange}
              />
              Slightly wide
            </label>
            <label htmlFor="width-5">
              <input
                type="radio"
                id="width-5"
                value="5"
                name="width"
                onClick={this.handleFormChange}
              />
              Too wide
            </label>
          </div>
        );
      }
      if (meta.characteristics.Comfort) {
        comfort = (
          <div>
            <span>Comfort</span>
            <label htmlFor="comfort-1">
              <input
                type="radio"
                id="comfort-1"
                value="1"
                name="comfort"
                onClick={this.handleFormChange}
              />
              Uncomfortable
            </label>
            <label htmlFor="comfort-2">
              <input
                type="radio"
                id="comfort-2"
                value="2"
                name="comfort"
                onClick={this.handleFormChange}
              />
              Slightly uncomfortable
            </label>
            <label htmlFor="comfort-3">
              <input
                type="radio"
                id="comfort-3"
                value="3"
                name="comfort"
                onClick={this.handleFormChange}
              />
              Ok
            </label>
            <label htmlFor="comfort-4">
              <input
                type="radio"
                id="comfort-4"
                value="4"
                name="comfort"
                onClick={this.handleFormChange}
              />
              Comfortable
            </label>
            <label htmlFor="comfort-5">
              <input
                type="radio"
                id="comfort-5"
                value="5"
                name="comfort"
                onClick={this.handleFormChange}
              />
              Perfect
            </label>
          </div>
        );
      }
      if (meta.characteristics.Quality) {
        quality = (
          <div>
            <span>Quality</span>
            <label htmlFor="quality-1">
              <input
                type="radio"
                id="quality-1"
                value="1"
                name="quality"
                onClick={this.handleFormChange}
              />
              Poor
            </label>
            <label htmlFor="quality-2">
              <input
                type="radio"
                id="quality-2"
                value="2"
                name="quality"
                onClick={this.handleFormChange}
              />
              Below average
            </label>
            <label htmlFor="quality-3">
              <input
                type="radio"
                id="quality-3"
                value="3"
                name="quality"
                onClick={this.handleFormChange}
              />
              What I expected
            </label>
            <label htmlFor="quality-4">
              <input
                type="radio"
                id="quality-4"
                value="4"
                name="quality"
                onClick={this.handleFormChange}
              />
              Pretty great
            </label>
            <label htmlFor="quality-5">
              <input
                type="radio"
                id="quality-5"
                value="5"
                name="quality"
                onClick={this.handleFormChange}
              />
              Perfect
            </label>
          </div>
        );
      }
      if (meta.characteristics.Length) {
        length = (
          <div>
            <span>Length</span>
            <label htmlFor="length-1">
              <input
                type="radio"
                id="length-1"
                value="1"
                name="length"
                onClick={this.handleFormChange}
              />
              Runs short
            </label>
            <label htmlFor="length-2">
              <input
                type="radio"
                id="length-2"
                value="2"
                name="length"
                onClick={this.handleFormChange}
              />
              Runs slightly short
            </label>
            <label htmlFor="length-3">
              <input
                type="radio"
                id="length-3"
                value="3"
                name="length"
                onClick={this.handleFormChange}
              />
              Perfect
            </label>
            <label htmlFor="length-4">
              <input
                type="radio"
                id="length-4"
                value="4"
                name="length"
                onClick={this.handleFormChange}
              />
              Runs slightly long
            </label>
            <label htmlFor="length-5">
              <input
                type="radio"
                id="length-5"
                value="5"
                name="length"
                onClick={this.handleFormChange}
              />
              Runs long
            </label>
          </div>
        );
      }
      if (meta.characteristics.Fit) {
        fit = (
          <div>
            <span>Fit</span>
            <label htmlFor="fit-1">
              <input
                type="radio"
                id="fit-1"
                value="1"
                name="fit"
                onClick={this.handleFormChange}
              />
              Runs tight
            </label>
            <label htmlFor="fit-2">
              <input
                type="radio"
                id="fit-2"
                value="2"
                name="fit"
                onClick={this.handleFormChange}
              />
              Runs slightly tight
            </label>
            <label htmlFor="fit-3">
              <input
                type="radio"
                id="fit-3"
                value="3"
                name="fit"
                onClick={this.handleFormChange}
              />
              Perfect
            </label>
            <label htmlFor="fit-4">
              <input
                type="radio"
                id="fit-4"
                value="4"
                name="fit"
                onClick={this.handleFormChange}
              />
              Runs slightly long
            </label>
            <label htmlFor="fit-5">
              <input
                type="radio"
                id="fit-5"
                value="5"
                name="fit"
                onClick={this.handleFormChange}
              />
              Runs long
            </label>
          </div>
        );
      }
    }

    if (!showModal) {
      return null;
    }

    return (
      <div className="modal-overlay">
        <form className="review-modal">
          <h1 className="review-modal-title">
            Write Your Review About &ldquo;
            {selectedProduct.name}
            &rdquo;
          </h1>
          <div className="review-modal-username">
            {'Nickname: '}
            <input
              type="text"
              placeholder="Example: jackson11"
              name="name"
              onChange={this.handleFormChange}
            />
            <div style={{ fontSize: '12px' }}>For privacy reasons, do not use your full name or email address</div>
          </div>
          <div className="review-modal-email">
            {'Email: '}
            <input
              type="text"
              placeholder="Example: jackson11@email.com"
              name="email"
              onChange={this.handleFormChange}
            />
            <div style={{ fontSize: '12px' }}>For authentication reasons, you will not be emailed</div>
          </div>
          <div className="review-modal-summary">
            {'Headline: '}
            <br />
            <textarea
              type="text"
              placeholder="Example: Best purchase ever!"
              value={summary}
              name="summary"
              onChange={this.handleFormChange}
              maxLength="100"
            />
          </div>
          <div className="review-modal-body">
            {'Review: '}
            <br />
            <textarea
              type="text"
              placeholder="What did you like or dislike about the product?"
              value={body}
              name="body"
              onChange={this.handleFormChange}
              maxLength="500"
            />
          </div>
          <div className="review-modal-recommend">
            Do you recommend this product?
            <label htmlFor="recommend-yes">
              <input
                type="radio"
                id="recommend-yes"
                value="true"
                name="recommend"
                onClick={this.handleFormChange}
              />
              Yes
            </label>
            <label htmlFor="recommend-no">
              <input
                type="radio"
                id="recommend-no"
                value="false"
                name="recommend"
                onClick={this.handleFormChange}
              />
              No
            </label>
          </div>
          <div
            className="stars review-modal-stars"
            style={{ '--rating': ratingHover === 0 ? rating : ratingHover, '--star-size': '25px' }}
            role="tablist"
          >
            <span className="stars-clickable" role="tablist">
              <span
                className="star-clickable"
                onClick={() => {
                  this.handleStarClick(1);
                }}
                onKeyPress={() => {
                  this.handleStarClick(1);
                }}
                onMouseEnter={() => {
                  this.handleStarHover(1);
                }}
                onMouseLeave={() => {
                  this.handleStarUnhover();
                }}
                onFocus={() => {
                  this.handleStarHover(1);
                }}
                onBlur={() => {
                  this.handleStarUnhover();
                }}
                role="tab"
                aria-selected="false"
                tabIndex="0"
              />
              <span
                className="star-clickable"
                onClick={() => {
                  this.handleStarClick(2);
                }}
                onKeyPress={() => {
                  this.handleStarClick(2);
                }}
                onMouseEnter={() => {
                  this.handleStarHover(2);
                }}
                onMouseLeave={() => {
                  this.handleStarUnhover();
                }}
                onFocus={() => {
                  this.handleStarHover(2);
                }}
                onBlur={() => {
                  this.handleStarUnhover();
                }}
                role="tab"
                aria-selected="false"
                tabIndex="0"
                style={{ left: '25px' }}
              />
              <span
                className="star-clickable"
                onClick={() => {
                  this.handleStarClick(3);
                }}
                onKeyPress={() => {
                  this.handleStarClick(3);
                }}
                onMouseEnter={() => {
                  this.handleStarHover(3);
                }}
                onMouseLeave={() => {
                  this.handleStarUnhover();
                }}
                onFocus={() => {
                  this.handleStarHover(3);
                }}
                onBlur={() => {
                  this.handleStarUnhover();
                }}
                role="tab"
                aria-selected="false"
                tabIndex="0"
                style={{ left: '50px' }}
              />
              <span
                className="star-clickable"
                onClick={() => {
                  this.handleStarClick(4);
                }}
                onKeyPress={() => {
                  this.handleStarClick(4);
                }}
                onMouseEnter={() => {
                  this.handleStarHover(4);
                }}
                onMouseLeave={() => {
                  this.handleStarUnhover();
                }}
                onFocus={() => {
                  this.handleStarHover(4);
                }}
                onBlur={() => {
                  this.handleStarUnhover();
                }}
                role="tab"
                aria-selected="false"
                tabIndex="0"
                style={{ left: '75px' }}
              />
              <span
                className="star-clickable"
                onClick={() => {
                  this.handleStarClick(5);
                }}
                onKeyPress={() => {
                  this.handleStarClick(5);
                }}
                onMouseEnter={() => {
                  this.handleStarHover(5);
                }}
                onMouseLeave={() => {
                  this.handleStarUnhover();
                }}
                onFocus={() => {
                  this.handleStarHover(5);
                }}
                onBlur={() => {
                  this.handleStarUnhover();
                }}
                role="tab"
                aria-selected="false"
                tabIndex="0"
                style={{ left: '100px' }}
              />
            </span>
          </div>
          {size}
          {width}
          {comfort}
          {quality}
          {length}
          {fit}
          <input
            className="review-modal-submit"
            type="submit"
            onClick={this.submitReviewForm}
            value="SUBMIT"
          />
          <button
            className="review-modal-close"
            type="button"
            onClick={toggleModal}
          >
            CLOSE
          </button>
        </form>
      </div>
    );
  }
}

ReviewModal.propTypes = {
  selectedProduct: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  meta: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
  ).isRequired,
  getProductReviews: PropTypes.func.isRequired,
  getMetaData: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
};

export default ReviewModal;
