import React from 'react';

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.styles.results[0].sale_price === null) {
      return (
        <div>
          {this.props.styles.results[0].original_price}
        </div>
      );
    }
  }
  }

export default Price;
