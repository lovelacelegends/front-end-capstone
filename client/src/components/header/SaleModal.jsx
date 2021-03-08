import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

const SaleModal = ({ closeSale }) => (
  <div className="sale-modal">
    <div className="sale-modal-text">
      SITE-WIDE ANNOUNCEMENT MESSAGE! -- SALE / DISCOUNT OFFER -- NEW PRODUCT HIGHLIGHT
    </div>
    <div
      className="sale-modal-button"
      onClick={closeSale}
      onKeyPress={closeSale}
      role="button"
      tabIndex={0}
    >
      <RiCloseCircleLine />
    </div>
  </div>
);

SaleModal.propTypes = {
  closeSale: PropTypes.func.isRequired,
};

export default SaleModal;
