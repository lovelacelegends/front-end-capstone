import React from 'react';

class RelatedItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleProductClick = this.handleProductClick.bind(this);
  }

  handleProductClick() {
    const { product } = this.props;
    console.log(product.id);
  }

  render() {
    const { product } = this.props;
    return (
      <div
        className="related-card"
        onClick={this.handleProductClick}
        onKeyPress={this.handleProductClick}
        role="link"
        tabIndex={0}
      >
        <div
          className="related-modal-star"
        >
          *
        </div>
        <img
          className="related-default-picture"
          src={product.url}
          alt={product.name}
        />
        <div className="related-category">{product.category}</div>
        <div className="related-name">{product.name}</div>
        <div className="related-price">{product.price}</div>
        <div className="related-rating">***** (star rating) </div>
      </div>
    );
  }
}

export default RelatedItemCard;
