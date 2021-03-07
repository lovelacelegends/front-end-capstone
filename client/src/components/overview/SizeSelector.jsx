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

    const arrayOfSkus = [];
    Object.keys(objOfSkus).forEach((key) => {
      arrayOfSkus.push(key);
    });

      let indexOfSku = 0;
      return (
        <div className="size-selector">
          <select onChange={updateSku} id="size-selector" value={currentSize}>
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
              return (
                <option className="hide-option" id={indexOfSku++}></option>
              );
              indexOfSku ++
            })}
          </select>
        </div>
      );
    }
}

export default SizeSelector;
