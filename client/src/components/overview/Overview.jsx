import React from 'react';
import ProductInfo from './ProductInfo';
import StyleSelector from './StyleSelector';
import ImageGallery from './ImageGallery';
import AddToCart from './AddToCart';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { selectedProduct, styles, currentStyle, updateCurrentStyle } = this.props;
    if (selectedProduct.name && (currentStyle !== undefined)) {
      return (
        <div className="overview">
          <ImageGallery
            selectedProduct={selectedProduct}
            styles={styles}
            currentStyle={currentStyle}
          />
          <ProductInfo
            selectedProduct={selectedProduct}
            styles={styles}
            currentStyle={currentStyle}
          />
          <StyleSelector
            styles={styles}
            currentStyle={currentStyle}
            updateCurrentStyle={updateCurrentStyle}
          />
          <AddToCart
            styles={styles}
            currentStyle={currentStyle}
          />
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
