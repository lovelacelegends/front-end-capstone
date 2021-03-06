import React from 'react';
import PropTypes from 'prop-types';

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stars: 0,
      recommend: '',
      size: null,
      width: null,
      comfort: null,
      quality: null,
      length: null,
      fit: null,
      summary: '',
      textarea: '',
    };
  }

  render() {
    const {
      showModal,
      toggleModal,
    } = this.props;

    const {
      stars,
      summary,
      textarea,
    } = this.state;

    if (!showModal) {
      return null;
    }

    return (
      <form className="review-modal">
        <h3>Write Your Review</h3>
        <h6>About the Product</h6>
        <div className="stars" style={{ '--rating': stars }} />
        <br />
        <span>Do you recommend this product?</span>
        <label htmlFor="recommend-yes">
          <input type="radio" id="recommend-yes" value="Yes" />
          Yes
        </label>
        <label htmlFor="recommend-no">
          <input type="radio" id="recommend-no" value="No" />
          No
        </label>
        <br />
        <span>Size</span>
        <label htmlFor="size-1">
          <input type="radio" id="size-1" value="1" />
          A size too small
        </label>
        <label htmlFor="size-2">
          <input type="radio" id="size-2" value="2" />
          1/2 a size too small
        </label>
        <label htmlFor="size-3">
          <input type="radio" id="size-3" value="3" />
          Perfect
        </label>
        <label htmlFor="size-4">
          <input type="radio" id="size-5" value="4" />
          1/2 a size too big
        </label>
        <label htmlFor="size-5">
          <input type="radio" id="size-5" value="5" />
          A size too wide
        </label>
        <br />
        <span>Width</span>
        <label htmlFor="width-1">
          <input type="radio" id="width-1" value="1" />
          Too narrow
        </label>
        <label htmlFor="width-2">
          <input type="radio" id="width-2" value="2" />
          Slightly narrow
        </label>
        <label htmlFor="width-3">
          <input type="radio" id="width-3" value="3" />
          Perfect
        </label>
        <label htmlFor="width-4">
          <input type="radio" id="width-4" value="4" />
          Slightly wide
        </label>
        <label htmlFor="width-5">
          <input type="radio" id="width-5" value="5" />
          Too wide
        </label>
        <br />
        <span>Comfort</span>
        <label htmlFor="comfort-1">
          <input type="radio" id="comfort-1" value="1" />
          Uncomfortable
        </label>
        <label htmlFor="comfort-2">
          <input type="radio" id="comfort-2" value="2" />
          Slightly uncomfortable
        </label>
        <label htmlFor="comfort-3">
          <input type="radio" id="comfort-3" value="3" />
          Ok
        </label>
        <label htmlFor="comfort-4">
          <input type="radio" id="comfort-4" value="4" />
          Comfortable
        </label>
        <label htmlFor="comfort-5">
          <input type="radio" id="comfort-5" value="5" />
          Perfect
        </label>
        <br />
        <span>Quality</span>
        <label htmlFor="quality-1">
          <input type="radio" id="quality-1" value="1" />
          Poor
        </label>
        <label htmlFor="quality-2">
          <input type="radio" id="quality-2" value="2" />
          Below average
        </label>
        <label htmlFor="quality-3">
          <input type="radio" id="quality-3" value="3" />
          What I expected
        </label>
        <label htmlFor="quality-4">
          <input type="radio" id="quality-4" value="4" />
          Pretty great
        </label>
        <label htmlFor="quality-5">
          <input type="radio" id="quality-5" value="5" />
          Perfect
        </label>
        <br />
        <span>Length</span>
        <label htmlFor="length-1">
          <input type="radio" id="length-1" value="1" />
          Runs short
        </label>
        <label htmlFor="length-2">
          <input type="radio" id="length-2" value="2" />
          Runs slightly short
        </label>
        <label htmlFor="length-3">
          <input type="radio" id="length-3" value="3" />
          Perfect
        </label>
        <label htmlFor="length-4">
          <input type="radio" id="length-4" value="4" />
          Runs slightly long
        </label>
        <label htmlFor="length-5">
          <input type="radio" id="length-5" value="5" />
          Runs long
        </label>
        <br />
        <span>Fit</span>
        <label htmlFor="fit-1">
          <input type="radio" id="fit-1" value="1" />
          Runs tight
        </label>
        <label htmlFor="fit-2">
          <input type="radio" id="fit-2" value="2" />
          Runs slightly tight
        </label>
        <label htmlFor="fit-3">
          <input type="radio" id="fit-3" value="3" />
          Perfect
        </label>
        <label htmlFor="fit-4">
          <input type="radio" id="fit-4" value="4" />
          Runs slightly long
        </label>
        <label htmlFor="fit-5">
          <input type="radio" id="fit-5" value="5" />
          Runs long
        </label>
        <br />
        <input
          type="text"
          placeholder="Example: Best purchase ever!"
          value={summary}
        />
        <br />
        <textarea
          type="text"
          placeholder="Why did you like the product ornot?"
          value={textarea}
        />
        <br />
        <input type="submit" />
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
