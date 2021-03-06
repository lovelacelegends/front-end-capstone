import React from 'react';
import PropTypes from 'prop-types';
import RelatedModal from './RelatedModal';
import RelatedCardContainer from './RelatedCardContainer';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
      positionIndex: 0,
      showModal: false,
      modalArray: [],
    };
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.updateModal = this.updateModal.bind(this);
  }

  updateModal(currentProductFeatureArray, relatedProductFeatureArray) {
    console.log(currentProductFeatureArray, relatedProductFeatureArray);
    this.setState({
      showModal: true,
      modalArray: [currentProductFeatureArray, relatedProductFeatureArray],
    });
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
    const { currentPosition, positionIndex, showModal, modalArray } = this.state;

    let leftArrow;
    if (currentPosition < 0) {
      leftArrow = (
        <div
          className="related-left-arrow"
          onClick={this.moveLeft}
          onKeyPress={this.moveLeft}
          role="button"
          tabIndex={0}
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
          onKeyPress={this.moveRight}
          role="button"
          tabIndex={0}
        >
          R
        </div>
      );
    } else {
      rightArrow = null;
    }

    let modalWindow;
    if (showModal) {
      modalWindow = (
        <RelatedModal
          modalArray={modalArray}
          // handleModalClick={this.handleModalClick}
          // selectedProduct={selectedProduct}
          // product={product}
        />
        // <div className="related-modal">
        //   HELLO
        // </div>
      );
    } else {
      modalWindow = (
        null
      );
    }

    return relatedProductIds.length ? (
      <>
        <div className="related-arrow-holder">
          {leftArrow}
          <div className="related-items-grid-frame">
            <RelatedCardContainer
              relatedProductIds={relatedProductIds}
              selectedProduct={selectedProduct}
              currentPosition={currentPosition}
              updateModal={this.updateModal}
            />
          </div>
          {rightArrow}
        </div>
        {modalWindow}
      </>
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
