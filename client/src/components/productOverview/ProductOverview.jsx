import React from 'react';

class ProductOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="productOverview">
        <div className="productOverviewText">
          ProductOverviewText
        </div>
        <div className="productOverviewList">
          ProductOverviewList
        </div>
      </div>
    );
  }
}

export default ProductOverview;
