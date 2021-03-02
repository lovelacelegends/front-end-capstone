import React from 'react';
import ProductInfo from './ProductInfo';
import StyleSelector from './StyleSelector';
import ImageGallery from './ImageGallery';
import AddToCart from './AddToCart';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStyle: 0,
    };
    this.updateCurrentStyle = this.updateCurrentStyle.bind(this);
  }

  updateCurrentStyle (input) {
    debugger;
    this.setState({ currentStyle: input });
  }

  render() {
    debugger;
    const { selectedProduct, styles } = this.props;
    const { currentStyle } = this.state;
    if (selectedProduct.name && (currentStyle !== undefined)) {
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
            updateCurrentStyle={this.updateCurrentStyle}
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
