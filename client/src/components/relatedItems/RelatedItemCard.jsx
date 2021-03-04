import React from 'react';
import RelatedModal from './RelatedModal';

class RelatedItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleProductClick = this.handleProductClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
  }

  handleProductClick() {
    const { product } = this.props;
    console.log(product.id);
  }

  handleModalClick() {
    console.log('clicked');
    //needs to toggle a modal in the middle of the screen
  }

  render() {
    const { product } = this.props;
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
        <RelatedModal />
      </div>
    );
  }
}

export default RelatedItemCard;
