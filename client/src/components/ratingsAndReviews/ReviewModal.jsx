import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
      recommend: '',
      size: null,
      width: null,
      comfort: null,
      quality: null,
      length: null,
      fit: null,
      summary: '',
      body: '',
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

  submitReviewForm(e) {
    e.preventDefault();

    const { meta } = this.props;

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
    } = this.state;

    const review = {
      product_id: meta.product_id,
      name: 'bobby',
      email: 'shimoshixp@gmail.com',
      rating,
      recommend,
      characteristics: {
        size,
        width,
        comfort,
        quality,
        length,
        fit,
      },
      summary,
      body,
    };

    axios.post('/reviews', review)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const {
      showModal,
      toggleModal,
    } = this.props;

    const {
      rating,
      summary,
      body,
    } = this.state;

    if (!showModal) {
      return null;
    }

    return (
      <form className="review-modal">
        <h2>Write Your Review</h2>
        <h4>About the Product</h4>
        <div
          className="stars"
          style={{ '--rating': rating }}
        />
        <span className="stars-clickable" role="tablist">
          <span
            className="star-clickable"
            onClick={() => {
              this.handleStarClick(1);
            }}
            onKeyPress={() => {
              this.handleStarClick(1);
            }}
            role="tab"
            aria-selected="true"
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
            role="tab"
            aria-selected="false"
            tabIndex="0"
            style={{ left: '15px' }}
          />
          <span
            className="star-clickable"
            onClick={() => {
              this.handleStarClick(3);
            }}
            onKeyPress={() => {
              this.handleStarClick(3);
            }}
            role="tab"
            aria-selected="false"
            tabIndex="0"
            style={{ left: '30px' }}
          />
          <span
            className="star-clickable"
            onClick={() => {
              this.handleStarClick(4);
            }}
            onKeyPress={() => {
              this.handleStarClick(4);
            }}
            role="tab"
            aria-selected="false"
            tabIndex="0"
            style={{ left: '45px' }}
          />
          <span
            className="star-clickable"
            onClick={() => {
              this.handleStarClick(5);
            }}
            onKeyPress={() => {
              this.handleStarClick(5);
            }}
            role="tab"
            aria-selected="false"
            tabIndex="0"
            style={{ left: '60px' }}
          />
        </span>
        <br />
        <span>Do you recommend this product?</span>
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
        <br />
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
        <br />
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
        <br />
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
        <br />
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
        <br />
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
        <br />
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
        <br />
        <input
          type="text"
          placeholder="Example: Best purchase ever!"
          value={summary}
          name="summary"
          onChange={this.handleFormChange}
        />
        <br />
        <textarea
          type="text"
          placeholder="Why did you like the product ornot?"
          value={body}
          name="body"
          onChange={this.handleFormChange}
        />
        <br />
        <input type="submit" onClick={this.submitReviewForm} />
        <button type="button" onClick={toggleModal}>Close</button>
      </form>
    );
  }
}

ReviewModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default ReviewModal;
