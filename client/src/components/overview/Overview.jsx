import React from 'react';
import ProductInfo from './ProductInfo';
import ProductOverview from './ProductOverview';
import StyleSelector from './StyleSelector';
import ImageGallery from './ImageGallery';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { selectedProduct, styles, currentStyle } = this.props;
    return (
      <div className="overView">
        <ImageGallery />
        <ProductInfo
          selectedProduct={selectedProduct}
          styles={styles}
          currentStyle={currentStyle}
        />
        <StyleSelector />
        <ProductOverview />
      </div>
    );
  }
}

export default Overview;
