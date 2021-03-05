import React from 'react';
import PropTypes from 'prop-types';

class ReviewModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { showModal, toggleModal } = this.props;

    if (!showModal) {
      return null;
    }

    return (
      <form className="review-modal">
        <h3>Write Your Review</h3>
        <h6>About the Product</h6>
        <div className="stars" style={{ '--rating': 0 }} />
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
        <input type="text" placeholder="Example: Best purchase ever!" />
        <br />
        <textarea type="text" placeholder="Why did you like the product ornot?" />
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
