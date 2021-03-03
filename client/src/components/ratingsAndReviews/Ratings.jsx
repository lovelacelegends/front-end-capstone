import React from 'react';

class Ratings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="ratings">
        <div>RATINGS & REVIEWS</div>
        <div>3.5 *****</div>
        <div>100% of reviewers recommend this product</div>
        <div>5 stars ###########</div>
        <div>4 stars ######</div>
        <div>3 stars ####</div>
        <div>2 stars #</div>
        <div>1 stars ###</div>
        <div> Size (too small, too large)</div>
        <div> Comfort (poor, perfect)</div>
      </div>
    );
  }
}

export default Ratings;
