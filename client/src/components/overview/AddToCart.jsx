import React from 'react';
import SizeSelector from './SizeSelector';
import QuantitySelector from './QuantitySelector'

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSku: '',
      currentSize: '',
      currentQuantity: '',
    };
    this.updateSkuInState = this.updateSkuInState.bind(this);
    this.updateQuantityInState = this.updateQuantityInState.bind(this);
  }

  updateSkuInState(sku, size) {
    this.setState({ currentSku: sku, currentSize: size, currentQuantity: '' });
  }

  updateQuantityInState(quantity) {
    debugger;
    this.setState({currentQuantity: quantity});
  }

  render() {
    const { styles, currentStyle } = this.props;
    const { currentSku, currentSize } = this.state;
    return (
      <div className="add-to-cart">
        <SizeSelector
          styles={styles}
          currentStyle={currentStyle}
          currentSku={currentSku}
          updateSkuInState={this.updateSkuInState}
        />
        <div>
          <QuantitySelector
            styles={styles}
            currentStyle={currentStyle}
            currentSku={currentSku}
            currentSize={currentSize}
            updateQuantityInState={this.updateQuantityInState}
          />
        </div>
      </div>
    );
  }
}

export default AddToCart;
