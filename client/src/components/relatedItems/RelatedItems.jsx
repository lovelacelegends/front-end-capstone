/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { GoChevronRight, GoChevronLeft } from 'react-icons/go';
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
    this.closeModal = this.closeModal.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  resetState() {
    this.setState({
      currentPosition: 0,
      positionIndex: 0,
    });
  }

  updateModal(currentProductFeatureArray, relatedProductFeatureArray) {
    this.setState({
      showModal: true,
      modalArray: [currentProductFeatureArray, relatedProductFeatureArray],
    });
  }

  closeModal() {
    this.setState({
      showModal: false,
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
    const {
      relatedProductIds,
      selectedProduct,
      relatedProductData,
      getProductData,
    } = this.props;
    const {
      currentPosition,
      positionIndex,
      showModal,
      modalArray,
    } = this.state;

    let leftArrow;
    if (currentPosition < 0) {
      leftArrow = (
        <div
          className="related-left-arrow clickable"
          onClick={this.moveLeft}
          // onKeyPress={this.moveLeft}
          // role="button"
          // tabIndex={0}
        >
          <GoChevronLeft className="related-icon" />
        </div>
      );
    } else {
      leftArrow = null;
    }

    let rightArrow;
    if (relatedProductIds.length > 4 && positionIndex < (relatedProductIds.length - 4)) {
      rightArrow = (
        <div
          className="related-right-arrow clickable"
          onClick={this.moveRight}
          // onKeyPress={this.moveRight}
          // role="button"
          // tabIndex={0}
        >
          <GoChevronRight className="related-icon" />
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
          closeModal={this.closeModal}
        />
      );
    } else {
      modalWindow = (
        null
      );
    }

    return relatedProductIds.length ? (
      <>
        <div className="related-title-grid">
          <div className="related-title-frame">
            <h2 className="related-title"> Related Products </h2>
          </div>
          <div className="related-title-underline"> </div>
        </div>
        <div className="related-arrow-holder">
          {leftArrow}
          <div className="related-items-grid-frame">
            <RelatedCardContainer
              relatedProductIds={relatedProductIds}
              selectedProduct={selectedProduct}
              currentPosition={currentPosition}
              updateModal={this.updateModal}
              relatedProductData={relatedProductData}
              getProductData={getProductData}
              resetState={this.resetState}
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
  relatedProductData: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.object,
    ]),
  ).isRequired,
  getProductData: PropTypes.func.isRequired,
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
