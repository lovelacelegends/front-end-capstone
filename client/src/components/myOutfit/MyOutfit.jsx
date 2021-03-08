/* eslint-disable no-undef */
import React from 'react';
import { GoChevronRight, GoChevronLeft } from 'react-icons/go';
import PropTypes from 'prop-types';
import OutfitContainer from './OutfitContainer';

class MyOutfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0,
      positionIndex: 0,
      storageCount: (Object.keys(localStorage).length),
    };
    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.updateStorageCount = this.updateStorageCount.bind(this);
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

  updateStorageCount() {
    const newStorageCount = Object.keys(localStorage).length;
    this.setState({
      storageCount: newStorageCount,
      currentPosition: 0,
      positionIndex: 0,
    });
  }

  render() {
    const { currentProduct, currentStyle, styles } = this.props;
    const { currentPosition, positionIndex, storageCount } = this.state;
    let leftArrow;
    if (positionIndex > 0) {
      leftArrow = (
        <div
          className="related-left-arrow"
          onClick={this.moveLeft}
          onKeyPress={this.moveLeft}
          role="button"
          tabIndex={0}
        >
          <GoChevronLeft />
        </div>
      );
    } else {
      leftArrow = (
        null
      );
    }

    let rightArrow;
    if (storageCount > 3 && (storageCount - 3 > positionIndex)) {
      rightArrow = (
        <div
          className="related-right-arrow"
          onClick={this.moveRight}
          onKeyPress={this.moveRight}
          role="button"
          tabIndex={0}
        >
          <GoChevronRight />
        </div>
      );
    } else {
      rightArrow = (
        null
      );
    }

    return (
      <>
        <div className="related-title"> Your Outfit </div>
        <div className="related-arrow-holder">
          {leftArrow}
          <div className="outfit-grid-frame">
            <OutfitContainer
              currentProduct={currentProduct}
              currentStyle={currentStyle}
              styles={styles}
              currentPosition={currentPosition}
              updateStorageCount={this.updateStorageCount}
            />
          </div>
          {rightArrow}
        </div>
      </>
    );
  }
}

MyOutfit.propTypes = {
  currentStyle: PropTypes.number.isRequired,
  currentProduct: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
  styles: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]),
  ).isRequired,
};

export default MyOutfit;
