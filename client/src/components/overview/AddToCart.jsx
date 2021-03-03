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
    this.updateSku = this.updateSku.bind(this);
  }

  updateSku(e) {
    e.preventDefault();
    const index = e.target.selectedIndex;
    let selectedSku = e.target.childNodes[index].id;
    let selectedSize = e.target.value;
    this.props.updateSkuInState(selectedSku, selectedSize);
  }

  updateSkuInState(sku, size) {
    this.setState({ currentSku: sku, currentSize: size, currentQuantity: '' });
  }

  updateQuantityInState(e) {
    let quantity = e.target.value;
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
          updateSku={this.updateSku}
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
