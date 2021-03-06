import React from 'react';
import PropTypes from 'prop-types';
// import RelatedLeftArrow from './RelatedLeftArrow';
// import RelatedRightArrow from './RelatedRightArrow';
import RelatedCardContainer from './RelatedCardContainer';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
    };
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
  }

  moveRight() {
    const { currentPosition } = this.state;
    const newPosition = currentPosition - 216;
    this.setState({
      currentPosition: newPosition,
    });
  }

  moveLeft() {
    const { currentPosition } = this.state;
    const newPosition = currentPosition + 216;
    this.setState({
      currentPosition: newPosition,
    });
  }

  render() {
    const { relatedProductIds, selectedProduct } = this.props;
    const { currentPosition } = this.state;

    return relatedProductIds.length ? (
      <div className="related-items-grid-frame">
        {/* <RelatedLeftArrow /> */}
        <div
          className="related-left-arrow"
          onClick={this.moveLeft}
        >
          L
        </div>
        <RelatedCardContainer
          relatedProductIds={relatedProductIds}
          selectedProduct={selectedProduct}
          currentPosition={currentPosition}
        />
        <div
          className="related-right-arrow"
          onClick={this.moveRight}
        >
          R
        </div>
        {/* <RelatedRightArrow /> */}
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
