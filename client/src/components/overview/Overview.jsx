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
    return (
      <div>
        <ImageGallery />
        <ProductInfo />
        <StyleSelector />
        <ProductOverview />
      </div>
    );
  }
}

export default Overview;
