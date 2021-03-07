import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

const nameConverter = (name) => {
  if (name.length > 20) {
    return `${name.substring(0, 20)}...`;
  }
  return name;
};

const OutfitCard = ({ product, handleDelete }) => (
  <div className="outfit-product-card">
    <div
      className="outfit-card-x"
      onClick={() => {
        handleDelete(product.id);
      }}
      onKeyPress={() => {
        handleDelete(product.id);
      }}
      role="button"
      tabIndex={0}
    >
      <RiCloseCircleLine />
    </div>
    <img
      className="outfit-card-image"
      alt={product.productName}
      src={product.url}
    />
    <div className="outfit-card-name">
      {nameConverter(product.productName)}
    </div>
    <div className="outfit-card-style">
      {product.styleName}
    </div>
  </div>
);

OutfitCard.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  product: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
  ).isRequired,
};

export default OutfitCard;
