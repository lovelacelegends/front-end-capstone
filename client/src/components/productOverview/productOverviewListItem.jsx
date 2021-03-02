import React from 'react';

class ProductOverviewListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="product-overview-list-item">
        {this.props.feature.feature}
        {this.props.feature.value}
      </div>
    );
  }
}

export default ProductOverviewListItem;
