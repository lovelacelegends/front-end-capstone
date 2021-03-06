import React from 'react';
import PropTypes from 'prop-types';
import OutfitContainer from './OutfitContainer';

class MyOutfit extends React.Component {
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
    const { currentProduct, currentStyle, styles } = this.props;
    const { currentPosition, positionIndex } = this.state;

    let leftArrow;
    if (positionIndex > 0) {
      leftArrow = (
        <div
          className="related-left-arrow"
          onClick={this.moveLeft}
        >
          L
        </div>
      );
    } else {
      leftArrow = (
        null
      );
    }

    return (
      <div className="related-arrow-holder">
        {leftArrow}
        <div className="outfit-grid-frame">
          <OutfitContainer
            currentProduct={currentProduct}
            currentStyle={currentStyle}
            styles={styles}
            currentPosition={currentPosition}
          />
        </div>
        <div
          className="related-right-arrow"
          onClick={this.moveRight}
        >
          R
        </div>
      </div>
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
