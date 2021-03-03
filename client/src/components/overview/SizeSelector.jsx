import React from 'react';

class SizeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.updateSku = this.updateSku.bind(this);
  }

  updateSku(e) {
    e.preventDefault();
    const index = e.target.selectedIndex;
    let selectedSku = e.target.childNodes[index].id;
    let selectedSize = e.target.value;
    this.props.updateSkuInState(selectedSku, selectedSize);
  }

  render() {
    const { styles, currentStyle } = this.props;
    const objOfSkus = styles.results[currentStyle].skus;

    const arrayOfSkus = [];
    Object.keys(objOfSkus).forEach((key) => {
      arrayOfSkus.push(key);
    });

    let arrZeroQuantity= [];
    arrayOfSkus.forEach((sku)=>{
      if(styles.results[currentStyle].skus.[sku].quantity === 0){
        arrZeroQuantity.push(sku)
      }
    })

    if (arrZeroQuantity.length === arrayOfSkus.length){
      return <option id="out-of-stoch">OUT OF STOCK</option>;
    }

    else{
      let indexOfSku = 0;
      return (
        <div className="size-selector">
          <select onChange={this.updateSku}>
            <option>SELECT SIZE</option>
            {arrayOfSkus.map((sku, i) => {
              if (objOfSkus[sku].quantity !== 0) {
                const sizetoDisplay = objOfSkus[sku].size;
                return (
                  <option id={indexOfSku++}>
                    {sizetoDisplay}
                  </option>
                );
                indexOfSku ++
              }
              return <option id="hide-option" disabled></option>;
            })}
          </select>
        </div>
      );
    }
  }
}

export default SizeSelector;