import React from 'react';
import PropTypes from 'prop-types';
import RelatedLeftArrow from './RelatedLeftArrow';
import RelatedRightArrow from './RelatedRightArrow';
import RelatedCardContainer from './RelatedCardContainer';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { relatedProductIds, selectedProduct } = this.props;

    return relatedProductIds.length ? (
      <div className="related-items-grid-frame">
        <RelatedLeftArrow />
        <RelatedCardContainer
          relatedProductIds={relatedProductIds}
          selectedProduct={selectedProduct}
        />
        <RelatedRightArrow />
      </div>
    ) : (
      'loading....'
    );
  }
}

RelatedItems.propTypes = {
  relatedProductIds: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number]),
  ).isRequired,
  selectedProduct: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
};

export default RelatedItems;
