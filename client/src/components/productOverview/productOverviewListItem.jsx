import React from 'react';
import { IoMdCheckmark } from 'react-icons/Io';

class ProductOverviewListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="product-overview-list-item">
        <IoMdCheckmark />{this.props.feature.feature}: {this.props.feature.value}
      </div>
    );
  }
}

export default ProductOverviewListItem;
