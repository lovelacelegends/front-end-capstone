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
          <button type="button" id="add-to-cart-button" className="hide">Add To Cart</button>
        </div>
      );
    }
    return (
      <div>
        <button type="button" onClick={addToCartApi} id="add-to-cart-button"> Add to cart </button>
      </div>
    );
  }
}

CartButton.propTypes = {
  addToCartApi: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
};

export default CartButton;
