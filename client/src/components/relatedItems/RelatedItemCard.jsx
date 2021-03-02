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
        <div>{product.category}</div>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <div>***** (star rating) </div>
      </div>
    );
  }
}

export default RelatedItemCard;
