import React from 'react';

class SizeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    //this.updateSku = this.updateSku.bind(this);
  }

  render() {
    const { styles, currentStyle, updateSku, currentSize } = this.props;
    const objOfSkus = styles.results[currentStyle].skus;

    if(objOfSkus.null) {
      return(
        <select>
          <option disable>OUT OF STOCK</option>
        </select>
      )
    }

    const arrayOfSkus = [];
    Object.keys(objOfSkus).forEach((key) => {
      arrayOfSkus.push(key);
    });

      return (
        <div className="size-selector">
          <select onChange={updateSku} id="size-selector" value={currentSize}>
            <option>SELECT SIZE</option>
            {arrayOfSkus.map((sku, i) => {
              if (objOfSkus[sku].quantity !== 0) {
                const sizetoDisplay = objOfSkus[sku].size;
                return (
                  <option key={sku} id={sku}>
                    {sizetoDisplay}
                  </option>
                );
              }
              return (
                <option className="hide-option" id={sku}></option>
              );
            })}
          </select>
        </div>
      );
    }
}

export default SizeSelector;
