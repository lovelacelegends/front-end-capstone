/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import EachThumbnail from './EachThumbnail';

class Thumbnails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startIndex: 0,
      endIndex: 6,
    };
    this.indexesToDisplay = this.indexesToDisplay.bind(this);
    this.increaseIndexesByOne = this.increaseIndexesByOne.bind(this);
    this.decreaseIndexesByOne = this.decreaseIndexesByOne.bind(this);
  }

  indexesToDisplay() {
    const { styles, currentStyle } = this.props;
    const { startIndex, endIndex } = this.state;
    const arrOfAllPhoto = styles.results[currentStyle].photos;
    const arrOfPhotosToRender = [];
    for (let i = startIndex; i <= endIndex
      && i < arrOfAllPhoto.length; i += 1) {
      arrOfPhotosToRender.push(arrOfAllPhoto[i]);
    }
    return arrOfPhotosToRender;
  }

  increaseIndexesByOne() {
    const { styles, currentStyle } = this.props;
    const { startIndex, endIndex } = this.state;
    const arrOfAllPhoto = styles.results[currentStyle].photos;
    if (endIndex < arrOfAllPhoto.length) {
      const newStartIndex = startIndex + 1;
      const newEndIndex = endIndex + 1;
      this.setState({ startIndex: newStartIndex, endIndex: newEndIndex });
    }
  }

  decreaseIndexesByOne() {
    const { startIndex, endIndex } = this.state;
    if (startIndex > 0) {
      const newStartIndex = startIndex - 1;
      const newEndIndex = endIndex - 1;
      this.setState({ startIndex: newStartIndex, endIndex: newEndIndex });
    }
  }

  render() {
    const { thumbnailClick } = this.props;
    return (
      <div className="gallery-of-thumbnails">
        <div
          className="up-arrow"
          onClick={this.decreaseIndexesByOne}
          onKeyPress={this.decreaseIndexesByOne}
          role="presentation"
        >
          <IoIosArrowUp />
        </div>
        {this.indexesToDisplay().map((photo, i) => <EachThumbnail photo={photo} key={i} thumbnailClick={thumbnailClick} />)}
        <div
          className="down-arrow"
          onClick={this.increaseIndexesByOne}
          onKeyPress={this.increaseIndexesByOne}
          role="presentation"
        >
          <IoIosArrowDown />
        </div>
      </div>
    );
  }
}

Thumbnails.propTypes = {
  styles: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
  currentStyle: PropTypes.number.isRequired,
  thumbnailClick: PropTypes.func.isRequired,
};

export default Thumbnails;
