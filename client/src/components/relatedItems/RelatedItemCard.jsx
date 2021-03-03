import React from 'react';

class RelatedItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { product } = this.props;
    return (
      <div className="related-card">
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
