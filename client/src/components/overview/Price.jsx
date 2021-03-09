import React from 'react';
import PropTypes from 'prop-types';

class Price extends React.Component {
  render() {
    const { styles, currentStyle } = this.props;
    let price = null;
    if (styles.results[currentStyle].sale_price === null) {
      price = (
        <div>
          {styles.results[currentStyle].original_price}
        </div>
      );
    } else {
      price = (
        <div>
          <div id="original-price">
            {styles.results[currentStyle].original_price}
          </div>
          {styles.results[currentStyle].sale_price}
        </div>
      );
    }
    return price;
  }
}

Price.propTypes = {
  styles: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
  currentStyle: PropTypes.number.isRequired,
};

export default Price;
