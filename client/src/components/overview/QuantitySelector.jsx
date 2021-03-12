/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable no-plusplus */
import React from 'react';
import PropTypes from 'prop-types';

class QuantitySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      styles,
      currentStyle,
      currentSku,
      updateQuantityInState,
      currentQuantity,
    } = this.props;

    if (currentSku === '') {
      return (
        <div className="quantity-selector" id="cart-button">
          <select className="cart-button" id="quantity-selector">
            <option disabled> - </option>
          </select>
        </div>
      );
    }

    const { quantity } = styles.results[currentStyle].skus[currentSku];
    let max;
    (quantity > 15) ? max = 15 : max = quantity;

    const arrOfQuantities = [];
    for (let i = 1; i <= max; i++) {
      arrOfQuantities.push(i);
    }

    return (
      <div className="quantity-selector">
        <select value={currentQuantity} onChange={updateQuantityInState} className="cart-button" id="quantity-selector">
          {arrOfQuantities.map((num) => <option>{num}</option>)}
        </select>
      </div>
    );
  }
}

QuantitySelector.propTypes = {
  styles: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
  currentStyle: PropTypes.number.isRequired,
  currentSku: PropTypes.string.isRequired,
  currentQuantity: PropTypes.number.isRequired,
  updateQuantityInState: PropTypes.func.isRequired,
};

export default QuantitySelector;
