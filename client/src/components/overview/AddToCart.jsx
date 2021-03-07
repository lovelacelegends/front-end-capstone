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
      currentQuantity: 1,
      outOfStock: false,
      skuId: "",
    };
    this.updateSkuInState = this.updateSkuInState.bind(this);
    this.updateQuantityInState = this.updateQuantityInState.bind(this);
    this.updateSku = this.updateSku.bind(this);
    this.isOutOfStockOption = this.isOutOfStockOption.bind(this);
    this.addToCartApi = this.addToCartApi.bind(this);
  }

  // componentDidMount() {
  //   this.isOutOfStockOption();
  // }

  addToCartApi(){
    let currentSkuIndex = this.state.currentSku;
    let sku = this.props.styles.results[this.props.currentStyle].skus[currentSkuIndex];
    console.log("api", sku)
  }

  isOutOfStockOption() {
    let arrayOfSkus = this.props.styles.results[this.props.currentStyle].skus;
    let arrayOfZeroQuant = arrayOfSkus.filter((sku) => sku.quantity === 0);
    let arrayOfNullQuant = arrayOfSkus.filter((sku) => sku.quantity === null);

    if(arrayOfSkus.length === arrayOfZeroQuant.length || arrayOfSkus.length === arrayOfNullQuant.length) {
      console.log('outofstock');
    }
  }

  updateSku(e) {
    e.preventDefault();
    const index = e.target.selectedIndex;
    let selectedSku = e.target.childNodes[index].id;
    let selectedSize = e.target.value;
    this.updateSkuInState(selectedSku, selectedSize);
    this.setState({ currentQuantity: 1 });
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
    const { currentSku, currentSize, outOfStock, currentQuantity } = this.state;
    return (
      <div className="add-to-cart">
        <SizeSelector
          styles={styles}
          currentStyle={currentStyle}
          currentSku={currentSku}
          updateSkuInState={this.updateSkuInState}
          updateSku={this.updateSku}
          currentSize={currentSize}
        />
        <div>
          <QuantitySelector
            currentQuantity={currentQuantity}
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
            addToCartApi={this.addToCartApi}
          />
        </div>
      </div>
    );
  }
}

export default AddToCart;
