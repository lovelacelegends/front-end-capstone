/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
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
    };
    this.updateSkuInState = this.updateSkuInState.bind(this);
    this.updateQuantityInState = this.updateQuantityInState.bind(this);
    this.updateSku = this.updateSku.bind(this);
    this.isOutOfStockOption = this.isOutOfStockOption.bind(this);
    this.addToCartApi = this.addToCartApi.bind(this);
  }

  addToCartApi() {
    const { currentSku, currentQuantity } = this.state;
    const currentSkuIndex = currentSku;
    const amountToSend = Number(currentQuantity);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < amountToSend; i++) {
      axios
        .post('/cart', { sku_id: currentSkuIndex })
        .then((response) => {
          console.log(response);
        });
    }
  }

  isOutOfStockOption() {
    const { styles, currentStyle } = this.props;
    const arrayOfSkus = styles.results[currentStyle].skus;
    const arrayOfZeroQuant = arrayOfSkus.filter((sku) => sku.quantity === 0);
    const arrayOfNullQuant = arrayOfSkus.filter((sku) => sku.quantity === null);

    if (arrayOfSkus.length === arrayOfZeroQuant.length
      || arrayOfSkus.length === arrayOfNullQuant.length) {
      console.log('outofstock');
    }
  }

  updateSku(e) {
    e.preventDefault();
    const index = e.target.selectedIndex;
    const selectedSku = e.target.childNodes[index].id;
    const selectedSize = e.target.value;
    this.updateSkuInState(selectedSku, selectedSize);
    this.setState({ currentQuantity: 1 });
  }

  updateSkuInState(sku, size) {
    this.setState({ currentSku: sku, currentSize: size, outOfStock: false });
  }

  updateQuantityInState(e) {
    const quantity = e.target.value;
    this.setState({ currentQuantity: quantity });
  }

  render() {
    const { styles, currentStyle } = this.props;
    const {
      currentSku, currentSize, outOfStock, currentQuantity,
    } = this.state;
    return (
      <div className="add-to-cart">
        <div className="size-quantity">
          <SizeSelector
            styles={styles}
            currentStyle={currentStyle}
            currentSku={currentSku}
            updateSkuInState={this.updateSkuInState}
            updateSku={this.updateSku}
            currentSize={currentSize}
          />
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

AddToCart.propTypes = {
  styles: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
  currentStyle: PropTypes.number.isRequired,
};

export default AddToCart;
