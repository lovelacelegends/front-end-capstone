import React from 'react';

class SizeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { styles, currentStyle } = this.props;
    const objOfSkus = styles.results[currentStyle].skus;

    let arrayOfSkus = [];
    Object.keys(objOfSkus).forEach((key) => {
      arrayOfSkus.push(key);
    });

    return (
      <div className="size-selector">
        <select>
          <option>SELECT SIZE</option>
          {arrayOfSkus.map((sku) => {
            if (objOfSkus[sku]["quantity"] !== 0) {
              const sizetoDisplay = objOfSkus[sku]["size"];
              return <option>{sizetoDisplay}</option>;
            }
            return <option>OUT OF STOCK</option>;
          })}
        </select>
      </div>
    );
  }
}

export default SizeSelector;
