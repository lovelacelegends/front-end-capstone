import React from 'react';

class QuantitySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { styles, currentStyle, currentSku, currentSize, updateQuantityInState } = this.props;

    if (currentSku === '') {
      return (
        <div className="quantity-selector">
          <select>
            <option disabled> - </option>
          </select>
        </div>
      );
    }

    let arrayOfSkus = Object.keys(styles.results[currentStyle].skus);
    let quantity = styles.results[currentStyle].skus[arrayOfSkus[currentSku]].quantity
    let max;
    (quantity > 15) ?  max = 15 :  max = quantity

    let arrOfQuantities = []
    for (let i=1; i<=max; i++) {
      arrOfQuantities.push(i);
    }

    return (
      <div className="quantity-selector">
        <select onChange={updateQuantityInState}>
          {arrOfQuantities.map((num)=>{
            return <option>{num}</option>
          })}
        </select>
      </div>
    );
  }
}

export default QuantitySelector;
