import React from 'react';
import SizeSelector from './SizeSelector';
import QuantitySelector from './QuantitySelector';
import CartButton from './CartButton';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSku: '',
      currentSize: '',
      currentQuantity: '',
      outOfStock: false,
    };
    this.updateSkuInState = this.updateSkuInState.bind(this);
    this.updateQuantityInState = this.updateQuantityInState.bind(this);
    this.updateSku = this.updateSku.bind(this);
    this.isOutOfStockOption = this.isOutOfStockOption.bind(this);
  }

  isOutOfStockOption() {
    this.setState({ outOfStock: true });
  }

  updateSku(e) {
    e.preventDefault();
    const index = e.target.selectedIndex;
    let selectedSku = e.target.childNodes[index].id;
    let selectedSize = e.target.value;
    this.updateSkuInState(selectedSku, selectedSize);
    document.querySelector('#size-selector').setAttribute('size', 1);
  }

  updateSkuInState(sku, size) {
    this.setState({ currentSku: sku, currentSize: size, outOfStock: false });
  }

  updateQuantityInState(e) {
    let quantity = e.target.value;
    this.setState({currentQuantity: quantity});
  }

  render() {
    const { styles, currentStyle } = this.props;
    const { currentSku, currentSize, outOfStock } = this.state;
    return (
      <div className="add-to-cart">
        <SizeSelector
          styles={styles}
          currentStyle={currentStyle}
          currentSku={currentSku}
          updateSkuInState={this.updateSkuInState}
          updateSku={this.updateSku}
          isOutOfStock={this.isOutOfStockOption}
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
        <div>
          <CartButton
            outOfStock={outOfStock}
            currentSize={currentSize}
          />
        </div>
      </div>
    );
  }
}

export default AddToCart;
