import React from 'react';
import PropTypes from 'prop-types';

const OutfitCard = ({ product }) => (
  <div
    className="outfit-product-card"
  >
    <div
      className="outfit-card-x"
    >
      X
    </div>
    <img
      className="outfit-card-image"
      alt={product.productName}
      src={product.url}
    />
    <div
      className="outfit-card-name"
    >
      {product.productName}
    </div>
    <div
      className="outfit-card-style"
    >
      {product.styleName}
    </div>
  </div>
);

OutfitCard.propTypes = {
  product: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ).isRequired,
};

export default OutfitCard;
