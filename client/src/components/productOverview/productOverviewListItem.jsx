import React from 'react';
import PropTypes from 'prop-types';
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
        <IoMdCheckmark />
        {feature.feature}
        :
        {' '}
        {feature.value}
      </div>
    );
  }
}

ProductOverviewListItem.propTypes = {
  feature: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
};

export default ProductOverviewListItem;
