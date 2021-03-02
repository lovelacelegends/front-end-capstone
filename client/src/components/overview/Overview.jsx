import React from 'react';
import ProductInfo from './ProductInfo';
import StyleSelector from './StyleSelector';
import ImageGallery from './ImageGallery';
import AddToCart from './AddToCart';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { selectedProduct, styles, currentStyle } = this.props;
    if (selectedProduct.name) {
      return (
        <div className="overView">
          <ImageGallery />
          <ProductInfo
            selectedProduct={selectedProduct}
            styles={styles}
            currentStyle={currentStyle}
          />
          <StyleSelector
            styles={styles}
            currentStyle={currentStyle}
          />
          <AddToCart />
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

export default Overview;
