import React from 'react';

class CartButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {outOfStock, currentSize} = this.props;
    if (outOfStock) {
      return null;
    }
    if (currentSize === '' || currentSize === 'SELECT SIZE') {
      return (
        <div>
            <button onClick={() =>{document.querySelector('#size-selector').focus()}} id='add-to-cart'> select size </button>
        </div>
      );
    }
    return (
      <div className="cart-button">
        <button id='add-to-cart'> take my money </button>
      </div>
    );
  }
}

export default CartButton;

        //if no size is slected on click then drop down sizes and say please select size
        /**
         * document.querySelector('#size-selector').setAttribute("size", document.querySelector("#size-selector").querySelectorAll("option").length)
         */