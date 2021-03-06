import React from 'react';
import ProductInfo from './ProductInfo';
import StyleSelector from './StyleSelector';
import ImageGallery from './ImageGallery';
import AddToCart from './AddToCart';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayGroupedExtras: true,
    };
    this.handleExpandedView = this.handleExpandedView.bind(this);
  }

  handleExpandedView() {
    debugger;
    this.setState(state => ({
      displayGroupedExtras: !state.displayGroupedExtras
    }));
  }

  render() {
    const { selectedProduct, styles, currentStyle, updateCurrentStyle } = this.props;
    const { displayGroupedExtras } = this.state;
    if (!selectedProduct.name || currentStyle === undefined) {
      return (
        <div>
          loading
        </div>
      );
    }
    const imageGallery = (
      <ImageGallery
        selectedProduct={selectedProduct}
        styles={styles}
        currentStyle={currentStyle}
        handleExpandedView={this.handleExpandedView}
      />
    );
    const groupedExtras = (
      <div className="grouped-extras">
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
    if (displayGroupedExtras) {
      return (
        <div className="overview-with-extras">
          {imageGallery}
          {groupedExtras}
        </div>
      );
    }
    return (
      <div className="overview-without-extras">
        {imageGallery}
      </div>
    );
  }
}

export default Overview;
