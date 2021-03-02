import React from 'react';
import RelatedLeftArrow from './RelatedLeftArrow';
import RelatedRightArrow from './RelatedRightArrow';
import RelatedCardContainer from './RelatedCardContainer';

// const RelatedItems = () => (
//   <div>RelatedItems WEEEE</div>
// );

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    const { relatedProductIds } = this.props;

    return (
      <div className="related-items-grid-frame">
        <RelatedLeftArrow />
        <RelatedCardContainer relatedProductIds={relatedProductIds} />
        <RelatedRightArrow />
      </div>
    );
  }
}

export default RelatedItems;
