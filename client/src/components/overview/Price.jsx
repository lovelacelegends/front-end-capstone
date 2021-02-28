import React from 'react';

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.styles.results[3].sale_price === null) {
      return (
        <div>
          {this.props.styles.results[3].original_price}
        </div>
      );
    }
    return (
      <div>
        <div id="originalPrice">
        {this.props.styles.results[3].original_price}
        </div>
        {this.props.styles.results[3].sale_price}
      </div>
    );
  }
}

export default Price;
