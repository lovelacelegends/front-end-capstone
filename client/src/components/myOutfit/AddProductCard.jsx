import React from 'react';
import PropTypes from 'prop-types';

const AddProductCard = ({ addToStorage }) => (
  <div
    className="add-product-card"
    onClick={addToStorage}
    onKeyPress={addToStorage}
    role="button"
    tabIndex={0}
  >
    <div id="plus-sign"> + </div>
    <div>ADD</div>
    <div>TO</div>
    <div>OUTFIT</div>
    <div>(Update Style)</div>
  </div>
);

AddProductCard.propTypes = {
  addToStorage: PropTypes.func.isRequired,
};

export default AddProductCard;
