import React from 'react';
import { IoMdCheckmark } from 'react-icons/io';

class ProductOverviewListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { feature } = this.props;
    return (
      <div className="product-overview-list-item">
        <IoMdCheckmark />{feature.feature}: {feature.value}
      </div>
    );
  }
}

export default ProductOverviewListItem;
