import React from 'react';
import PropTypes from 'prop-types';

class CartButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { currentSize, addToCartApi } = this.props;
    if (currentSize === '' || currentSize === 'SELECT SIZE') {
      return (
        <div>
          <button type="button">Select size</button>
        </div>
      );
    }
    return (
      <div className="cart-button">
        <button type="button" onClick={addToCartApi} id="add-to-cart"> Add to cart </button>
      </div>
    );
  }
}

CartButton.propTypes = {
  addToCartApi: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
};

export default CartButton;
