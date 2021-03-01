import React from 'react';

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { styles, currentStyle} = this.props;
    let price = null;
    if (styles.results[currentStyle].sale_price === null) {
      price = (
        <div>
          {styles.results[currentStyle].original_price}
        </div>
      );
    } else {
      price = (
        <div>
          <div id="originalPrice">
            {styles.results[currentStyle].original_price}
          </div>
          {styles.results[currentStyle].sale_price}
        </div>
      );
    }
    return price;
  }
}

export default Price;
