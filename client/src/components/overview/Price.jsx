import React from 'react';

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        price
      </div>
    );
  }
}

export default Price;

/*   let price = null;
    if (this.props.styles.results[3].sale_price === null) {
      price = (
        <div>
          {this.props.styles.results[3].original_price}
        </div>
      );
    } else {
    price = (
      <div>
        <div id="originalPrice">
        {this.props.styles.results[3].original_price}
        </div>
        {this.props.styles.results[3].sale_price}
      </div>
    );
    }
    return price;
  } */
