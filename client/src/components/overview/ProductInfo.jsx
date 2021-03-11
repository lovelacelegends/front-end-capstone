import React from 'react';
import PropTypes from 'prop-types';
import Price from './Price';
import helper from '../../../../helper';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      selectedProduct,
      styles,
      currentStyle,
      reviews,
      meta,
    } = this.props;

    return (
      <div className="product-info">
        <section id="rating">
          <span
            className="stars"
            style={{ '--rating': helper.findStarRating(meta.ratings) }}
          />
          <a href="#route-to-ratings" id="read-all-reviews">
            {reviews.results.length}
            {' ratings'}
          </a>
        </section>
        <section id="category">
          {selectedProduct.category}
        </section>
        <section className="name">
          {selectedProduct.name}
        </section>
        <section className="price">
          <Price
            styles={styles}
            currentStyle={currentStyle}
          />
        </section>
      </div>
    );
  }
}

ProductInfo.propTypes = {
  styles: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
  selectedProduct: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
  reviews: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
  meta: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
  ).isRequired,
  currentStyle: PropTypes.number.isRequired,
};

export default ProductInfo;
