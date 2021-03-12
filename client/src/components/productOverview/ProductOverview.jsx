/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai';
import ProductOverviewListItem from './productOverviewListItem';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { selectedProduct } = this.props;
    const iconStyles = { fontSize: '1.5em', margin: '15px', float: 'right' };
    if (selectedProduct.name) {
      return (
        <div className="product-overview">
          <div className="product-overview-text">
            <h3>{selectedProduct.slogan}</h3>
            <div className="description">{selectedProduct.description}</div>
            <span>
              <AiFillFacebook id="faceBook" style={iconStyles} />
              <AiFillInstagram id="instagram" style={iconStyles} />
              <AiFillTwitterCircle id="twitter" style={iconStyles} />
            </span>
          </div>
          <div className="product-overview-list">
            {selectedProduct.features.map((feature, i) => <ProductOverviewListItem feature={feature} key={i} />)}
          </div>
        </div>
      );
    }
    return (
      <div>
        loading
      </div>
    );
  }
}

ProductOverview.propTypes = {
  selectedProduct: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
};

export default ProductOverview;
