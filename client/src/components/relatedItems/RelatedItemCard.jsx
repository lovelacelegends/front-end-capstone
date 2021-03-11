/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import React from 'react';
import { RiInformationLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import helper from '../../../../helper';

class RelatedItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleProductClick = this.handleProductClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
  }

  handleProductClick() {
    const { product, getProductData, resetState } = this.props;
    scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    getProductData(product.id);
    resetState();
  }

  handleModalClick() {
    const { product, selectedProduct, updateModal } = this.props;
    updateModal(selectedProduct, product);
  }

  render() {
    const { product } = this.props;

    let noRating;
    if (Object.keys(product.ratings).length === 0) {
      noRating = (
        'No Ratings'
      );
    } else {
      noRating = (
        null
      );
    }

    return (
      <div className="related-card">
        <div
          className="related-modal-star"
          onClick={this.handleModalClick}
          onKeyPress={this.handleModalClick}
          role="link"
          tabIndex={0}
        >
          <RiInformationLine />
        </div>
        {product.url
          ? (
            <img
              className="related-default-picture"
              src={product.url}
              alt={product.name}
            />
          )
          : 'no image available :('}
        <div
          className="related-text-holder"
          onClick={this.handleProductClick}
          onKeyPress={this.handleProductClick}
          role="link"
          tabIndex={0}
        >
          <div className="related-category">{product.category}</div>
          <div className="related-name">{product.name}</div>
          <div className="related-price">
            $
            {product.price}
          </div>
          <div
            className="related-rating stars"
            style={{ '--rating': helper.findStarRating(product.ratings) }}
          >
            {noRating}
          </div>
        </div>
      </div>
    );
  }
}

RelatedItemCard.propTypes = {
  resetState: PropTypes.func.isRequired,
  getProductData: PropTypes.func.isRequired,
  updateModal: PropTypes.func.isRequired,
  selectedProduct: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
  product: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
      PropTypes.object,
    ]),
  ).isRequired,
};

export default RelatedItemCard;
