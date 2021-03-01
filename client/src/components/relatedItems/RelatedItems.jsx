import React from 'react';
import RelatedLeftArrow from './RelatedLeftArrow';
import RelatedRightArrow from './RelatedRightArrow';
import CardContainer from './CardContainer';

// const RelatedItems = () => (
//   <div>RelatedItems WEEEE</div>
// );

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="related-items-grid-frame">
        <RelatedLeftArrow />
        <CardContainer />
        <RelatedRightArrow />
      </div>
    );
  }
}

export default RelatedItems;
