import React from 'react';

class RelatedItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { product } = this.props;
    return (
      <div>
        {product.name}
      </div>
    );
  }
}

export default RelatedItemCard;
