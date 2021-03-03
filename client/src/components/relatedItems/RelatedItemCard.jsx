import React from 'react';

class RelatedItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleStarClick = this.handleStarClick.bind(this);
    this.handleProductClick = this.handleProductClick.bind(this);
  }

  handleStarClick() {
    console.log('star clicked');
  }

  handleProductClick() {
    console.log('product clicked')
  }

  render() {
    const { product } = this.props;
    return (
      <div
        className="related-card"
        onClick={this.handleProductClick}
      >
        <div
          className="related-modal-star"
          onClick={this.handleStarClick}
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
