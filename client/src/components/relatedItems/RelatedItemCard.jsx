import React from 'react';
import RelatedModal from './RelatedModal';

class RelatedItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.handleProductClick = this.handleProductClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
  }

  handleProductClick() {
    const { product } = this.props;
    console.log(product.id);
  }

  handleModalClick() {
    const { showModal } = this.state;
    this.setState({
      showModal: !showModal,
    });
  }

  render() {
    const { product, selectedProduct } = this.props;
    const { showModal } = this.state;
    let modalDiv;

    if (!showModal) {
      modalDiv = (
        null
      );
    } else {
      modalDiv = (
        <RelatedModal
          handleModalClick={this.handleModalClick}
          selectedProduct={selectedProduct}
          product={product}
        />
      );
    }

    return (
      <div
        className="related-card"
        // onClick={this.handleProductClick}
        // onKeyPress={this.handleProductClick}
        // role="link"
        // tabIndex={0}
      >
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
          onClick={this.handleProductClick}
          onKeyPress={this.handleProductClick}
          tabIndex={0}
          className="related-default-picture"
          src={product.url}
          alt={product.name}
        />
        <div
          onClick={this.handleProductClick}
          onKeyPress={this.handleProductClick}
          role="link"
          tabIndex={0}
        >
          <div className="related-category">{product.category}</div>
          <div className="related-name">{product.name}</div>
          <div className="related-price">{product.price}</div>
          <div className="related-rating">***** (star rating) </div>
        </div>
        {modalDiv}
      </div>
    );
  }
}

export default RelatedItemCard;
