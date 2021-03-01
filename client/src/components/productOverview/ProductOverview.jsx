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
        <div className="productOverview">
          <div className="productOverviewText">
            {selectedProduct.slogan}
            {selectedProduct.description}
          </div>
          <div className="productOverviewList">
            {selectedProduct.features.map((feature)=> <ProductOverviewListItem feature={feature} key={feature.feature}/>)}
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
