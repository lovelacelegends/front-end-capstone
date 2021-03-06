import React from 'react';
import PropTypes from 'prop-types';
import RelatedCardContainer from './RelatedCardContainer';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
      positionIndex: 0,
    };
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
  }

  moveRight() {
    const { currentPosition, positionIndex } = this.state;
    const newPosition = currentPosition - 216;
    const newIndex = positionIndex + 1;
    this.setState({
      currentPosition: newPosition,
      positionIndex: newIndex,
    });
  }

  moveLeft() {
    const { currentPosition, positionIndex } = this.state;
    const newPosition = currentPosition + 216;
    const newIndex = positionIndex - 1;
    this.setState({
      currentPosition: newPosition,
      positionIndex: newIndex,
    });
  }

  render() {
    const { relatedProductIds, selectedProduct } = this.props;
    const { currentPosition, positionIndex } = this.state;

    let leftArrow;
    if (currentPosition < 0) {
      leftArrow = (
        <div
          className="related-left-arrow"
          onClick={this.moveLeft}
        >
          L
        </div>
      );
    } else {
      leftArrow = null;
    }

    let rightArrow;
    if (relatedProductIds.length > 4 && positionIndex < (relatedProductIds.length - 4)) {
      rightArrow = (
        <div
          className="related-right-arrow"
          onClick={this.moveRight}
        >
          R
        </div>
      );
    } else {
      rightArrow = null;
    }

    return relatedProductIds.length ? (
      <div className="related-items-grid-frame">
        {leftArrow}
        <RelatedCardContainer
          relatedProductIds={relatedProductIds}
          selectedProduct={selectedProduct}
          currentPosition={currentPosition}
        />
        {rightArrow}
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
