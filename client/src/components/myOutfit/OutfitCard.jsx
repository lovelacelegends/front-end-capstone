import React from 'react';

const OutfitCard = ({ product }) => (
  <div
    className="outfit-product-card"
  >
    <div
      className="outfit-card-x"
    >
      X
    </div>
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

export default OutfitCard;
