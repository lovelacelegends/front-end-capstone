/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import PropTypes from 'prop-types';

class SizeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      styles,
      currentStyle,
      updateSku,
      currentSize,
    } = this.props;
    const objOfSkus = styles.results[currentStyle].skus;

    if (objOfSkus.null) {
      return (
<<<<<<< HEAD
        <select>
          <option disable className="cart-button">OUT OF STOCK</option>
=======
        <select className="cart-button">
          <option disable>OUT OF STOCK</option>
>>>>>>> f2ed62994c18c105371d8e4802075bea28eb0ea4
        </select>
      );
    }

    const arrayOfSkus = [];
    Object.keys(objOfSkus).forEach((key) => {
      arrayOfSkus.push(key);
    });

    return (
      <div className="size-selector">
        <select onChange={updateSku} id="size-selector" className="cart-button" value={currentSize}>
          <option>SELECT SIZE</option>
          {arrayOfSkus.map((sku) => {
            if (objOfSkus[sku].quantity !== 0) {
              const sizetoDisplay = objOfSkus[sku].size;
              return (
                <option key={sku} id={sku}>
                  {sizetoDisplay}
                </option>
              );
            }
            return (
              <option className="hide-option" id={sku} />
            );
          })}
        </select>
      </div>
    );
  }
}

SizeSelector.propTypes = {
  styles: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
  currentStyle: PropTypes.number.isRequired,
  updateSku: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
};

export default SizeSelector;
