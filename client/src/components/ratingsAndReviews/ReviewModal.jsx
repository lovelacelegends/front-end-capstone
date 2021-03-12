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
          <div className="review-modal-size">
            <span className="review-modal-char-0">Size</span>
            <label className="review-modal-char-1" htmlFor="size-1">
              <input
                type="radio"
                id="size-1"
                value="1"
                name="size"
                onClick={this.handleFormChange}
                tabIndex="0"
              />
              <br />
              Too small
            </label>
            <label className="review-modal-char-2" htmlFor="size-2">
              <input
                type="radio"
                id="size-2"
                value="2"
                name="size"
                onClick={this.handleFormChange}
                tabIndex="0"
              />
              <br />
              Slightly small
            </label>
            <label className="review-modal-char-3" htmlFor="size-3">
              <input
                type="radio"
                id="size-3"
                value="3"
                name="size"
                onClick={this.handleFormChange}
              />
              <br />
              Perfect
            </label>
            <label className="review-modal-char-4" htmlFor="size-4">
              <input
                type="radio"
                id="size-4"
                value="4"
                name="size"
                onClick={this.handleFormChange}
              />
              <br />
              Slight large
            </label>
            <label className="review-modal-char-5" htmlFor="size-5">
              <input
                type="radio"
                id="size-5"
                value="5"
                name="size"
                onClick={this.handleFormChange}
              />
              <br />
              Too large
            </label>
          </div>
        );
      }
      if (meta.characteristics.Width) {
        width = (
          <div className="review-modal-width">
            <span className="review-modal-char-0">Width</span>
            <label className="review-modal-char-1" htmlFor="width-1">
              <input
                type="radio"
                id="width-1"
                value="1"
                name="width"
                onClick={this.handleFormChange}
              />
              <br />
              Too narrow
            </label>
            <label className="review-modal-char-2" htmlFor="width-2">
              <input
                type="radio"
                id="width-2"
                value="2"
                name="width"
                onClick={this.handleFormChange}
              />
              <br />
              Slightly narrow
            </label>
            <label className="review-modal-char-3" htmlFor="width-3">
              <input
                type="radio"
                id="width-3"
                value="3"
                name="width"
                onClick={this.handleFormChange}
              />
              <br />
              Perfect
            </label>
            <label className="review-modal-char-4" htmlFor="width-4">
              <input
                type="radio"
                id="width-4"
                value="4"
                name="width"
                onClick={this.handleFormChange}
              />
              <br />
              Slightly wide
            </label>
            <label className="review-modal-char-5" htmlFor="width-5">
              <input
                type="radio"
                id="width-5"
                value="5"
                name="width"
                onClick={this.handleFormChange}
              />
              <br />
              Too wide
            </label>
          </div>
        );
      }
      if (meta.characteristics.Comfort) {
        comfort = (
          <div className="review-modal-comfort">
            <span className="review-modal-char-0">Comfort</span>
            <label className="review-modal-char-1" htmlFor="comfort-1">
              <input
                type="radio"
                id="comfort-1"
                value="1"
                name="comfort"
                onClick={this.handleFormChange}
              />
              <br />
              Uncomfortable
            </label>
            <label className="review-modal-char-2" htmlFor="comfort-2">
              <input
                type="radio"
                id="comfort-2"
                value="2"
                name="comfort"
                onClick={this.handleFormChange}
              />
              <br />
              Slightly uncomfortable
            </label>
            <label className="review-modal-char-3" htmlFor="comfort-3">
              <input
                type="radio"
                id="comfort-3"
                value="3"
                name="comfort"
                onClick={this.handleFormChange}
              />
              <br />
              Ok
            </label>
            <label className="review-modal-char-4" htmlFor="comfort-4">
              <input
                type="radio"
                id="comfort-4"
                value="4"
                name="comfort"
                onClick={this.handleFormChange}
              />
              <br />
              Comfortable
            </label>
            <label className="review-modal-char-5" htmlFor="comfort-5">
              <input
                type="radio"
                id="comfort-5"
                value="5"
                name="comfort"
                onClick={this.handleFormChange}
              />
              <br />
              Perfect
            </label>
          </div>
        );
      }
      if (meta.characteristics.Quality) {
        quality = (
          <div className="review-modal-quality">
            <span className="review-modal-char-0">Quality</span>
            <label className="review-modal-char-1" htmlFor="quality-1">
              <input
                type="radio"
                id="quality-1"
                value="1"
                name="quality"
                onClick={this.handleFormChange}
              />
              <br />
              Poor
            </label>
            <label className="review-modal-char-2" htmlFor="quality-2">
              <input
                type="radio"
                id="quality-2"
                value="2"
                name="quality"
                onClick={this.handleFormChange}
              />
              <br />
              Below average
            </label>
            <label className="review-modal-char-3" htmlFor="quality-3">
              <input
                type="radio"
                id="quality-3"
                value="3"
                name="quality"
                onClick={this.handleFormChange}
              />
              <br />
              Decent
            </label>
            <label className="review-modal-char-4" htmlFor="quality-4">
              <input
                type="radio"
                id="quality-4"
                value="4"
                name="quality"
                onClick={this.handleFormChange}
              />
              <br />
              Pretty great
            </label>
            <label className="review-modal-char-5" htmlFor="quality-5">
              <input
                type="radio"
                id="quality-5"
                value="5"
                name="quality"
                onClick={this.handleFormChange}
              />
              <br />
              Perfect
            </label>
          </div>
        );
      }
      if (meta.characteristics.Length) {
        length = (
          <div className="review-modal-length">
            <span className="review-modal-char-0">Length</span>
            <label className="review-modal-char-1" htmlFor="length-1">
              <input
                type="radio"
                id="length-1"
                value="1"
                name="length"
                onClick={this.handleFormChange}
              />
              <br />
              Runs short
            </label>
            <label className="review-modal-char-2" htmlFor="length-2">
              <input
                type="radio"
                id="length-2"
                value="2"
                name="length"
                onClick={this.handleFormChange}
              />
              <br />
              Runs slightly short
            </label>
            <label className="review-modal-char-3" htmlFor="length-3">
              <input
                type="radio"
                id="length-3"
                value="3"
                name="length"
                onClick={this.handleFormChange}
              />
              <br />
              Perfect
            </label>
            <label className="review-modal-char-4" htmlFor="length-4">
              <input
                type="radio"
                id="length-4"
                value="4"
                name="length"
                onClick={this.handleFormChange}
              />
              <br />
              Runs slightly long
            </label>
            <label className="review-modal-char-5" htmlFor="length-5">
              <input
                type="radio"
                id="length-5"
                value="5"
                name="length"
                onClick={this.handleFormChange}
              />
              <br />
              Runs long
            </label>
          </div>
        );
      }
      if (meta.characteristics.Fit) {
        fit = (
          <div className="review-modal-fit">
            <span className="review-modal-char-0">Fit</span>
            <label className="review-modal-char-1" htmlFor="fit-1">
              <input
                type="radio"
                id="fit-1"
                value="1"
                name="fit"
                onClick={this.handleFormChange}
              />
              <br />
              Runs tight
            </label>
            <label className="review-modal-char-2" htmlFor="fit-2">
              <input
                type="radio"
                id="fit-2"
                value="2"
                name="fit"
                onClick={this.handleFormChange}
              />
              <br />
              Runs slightly tight
            </label>
            <label className="review-modal-char-3" htmlFor="fit-3">
              <input
                type="radio"
                id="fit-3"
                value="3"
                name="fit"
                onClick={this.handleFormChange}
              />
              <br />
              Perfect
            </label>
            <label className="review-modal-char-4" htmlFor="fit-4">
              <input
                type="radio"
                id="fit-4"
                value="4"
                name="fit"
                onClick={this.handleFormChange}
              />
              <br />
              Runs slightly long
            </label>
            <label className="review-modal-char-5" htmlFor="fit-5">
              <input
                type="radio"
                id="fit-5"
                value="5"
                name="fit"
                onClick={this.handleFormChange}
              />
              <br />
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
              {' Yes '}
            </label>
            <label htmlFor="recommend-no">
              <input
                type="radio"
                id="recommend-no"
                value="false"
                name="recommend"
                onClick={this.handleFormChange}
              />
              {' No '}
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
