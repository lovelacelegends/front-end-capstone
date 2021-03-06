import React from 'react';
import PropTypes from 'prop-types';

class RelatedItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleProductClick = this.handleProductClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
  }

  handleProductClick() {
    const { product } = this.props;
    // eslint-disable-next-line no-console
    console.log(product.id);
  }

  handleModalClick() {
    const { product, selectedProduct, updateModal } = this.props;
    updateModal(selectedProduct, product);
  }

  render() {
    const { product } = this.props;

    return (
      <div className="related-card">
        <div
          className="related-modal-star"
          onClick={this.handleModalClick}
          onKeyPress={this.handleModalClick}
          role="link"
          tabIndex={0}
        >
          *
        </div>
        <img
          className="related-default-picture"
          src={product.url}
          alt={product.name}
        />
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
          <div className="related-rating">***** (star rating) </div>
        </div>
      </div>
    );
  }
}

RelatedItemCard.propTypes = {
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
