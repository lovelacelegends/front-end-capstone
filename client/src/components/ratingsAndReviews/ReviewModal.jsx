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
        <label>
          <input type="radio" value="Yes" />
          Yes
        </label>
        <label>
          <input type="radio" value="No" />
          No
        </label>
        <br />
        <span>Size</span>
        <label>
          <input type="radio" value="1" />
          A size too small
        </label>
        <label>
          <input type="radio" value="2" />
          1/2 a size too small
        </label>
        <label>
          <input type="radio" value="3" />
          Perfect
        </label>
        <label>
          <input type="radio" value="4" />
          1/2 a size too big
        </label>
        <label>
          <input type="radio" value="5" />
          A size too wide
        </label>
        <br />
        <span>Width</span>
        <label>
          <input type="radio" value="1" />
          Too narrow
        </label>
        <label>
          <input type="radio" value="2" />
          Slightly narrow
        </label>
        <label>
          <input type="radio" value="3" />
          Perfect
        </label>
        <label>
          <input type="radio" value="4" />
          Slightly wide
        </label>
        <label>
          <input type="radio" value="5" />
          Too wide
        </label>
        <br />
        <span>Comfort</span>
        <label>
          <input type="radio" value="1" />
          Uncomfortable
        </label>
        <label>
          <input type="radio" value="2" />
          Slightly uncomfortable
        </label>
        <label>
          <input type="radio" value="3" />
          Ok
        </label>
        <label>
          <input type="radio" value="4" />
          Comfortable
        </label>
        <label>
          <input type="radio" value="5" />
          Perfect
        </label>
        <br />
        <span>Quality</span>
        <label>
          <input type="radio" value="1" />
          Poor
        </label>
        <label>
          <input type="radio" value="2" />
          Below average
        </label>
        <label>
          <input type="radio" value="3" />
          What I expected
        </label>
        <label>
          <input type="radio" value="4" />
          Pretty great
        </label>
        <label>
          <input type="radio" value="5" />
          Perfect
        </label>
        <br />
        <span>Length</span>
        <label>
          <input type="radio" value="1" />
          Runs short
        </label>
        <label>
          <input type="radio" value="2" />
          Runs slightly short
        </label>
        <label>
          <input type="radio" value="3" />
          Perfect
        </label>
        <label>
          <input type="radio" value="4" />
          Runs slightly long
        </label>
        <label>
          <input type="radio" value="5" />
          Runs long
        </label>
        <br />
        <span>Fit</span>
        <label>
          <input type="radio" value="1" />
          Runs tight
        </label>
        <label>
          <input type="radio" value="2" />
          Runs slightly tight
        </label>
        <label>
          <input type="radio" value="3" />
          Perfect
        </label>
        <label>
          <input type="radio" value="4" />
          Runs slightly long
        </label>
        <label>
          <input type="radio" value="5" />
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
