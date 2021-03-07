import React from 'react';
import ProductOverviewListItem from './productOverviewListItem';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {selectedProduct} = this.props;
    if (selectedProduct.name) {
      return (
        <div className="product-overview">
          <div className="product-overview-text">
            <div className="slogan">{selectedProduct.slogan}</div>
            <div className="description">{selectedProduct.description}</div>
          </div>
          <div className="product-overview-list">
            {selectedProduct.features.map((feature, i)=> <ProductOverviewListItem feature={feature} key={i}/>)}
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

export default ProductOverview;
