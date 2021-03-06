import React from 'react';
import EachThumbnail from './EachThumbnail';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/Io';

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
    let arrOfAllPhoto = this.props.styles.results[this.props.currentStyle].photos;
    const arrOfPhotosToRender = [];
    for (let i = this.state.startIndex; i <= this.state.endIndex
      && i < arrOfAllPhoto.length; i += 1) {
      arrOfPhotosToRender.push(arrOfAllPhoto[i]);
    }
    return arrOfPhotosToRender;
  }

  increaseIndexesByOne() {
    let arrOfAllPhoto = this.props.styles.results[this.props.currentStyle].photos;
    if(this.state.endIndex < arrOfAllPhoto.length) {
      const newStartIndex = this.state.startIndex += 1;
      const newEndIndex = this.state.endIndex += 1;
      this.setState({ startIndex: newStartIndex, endIndex: newEndIndex });
    }
  }

  decreaseIndexesByOne() {
    debugger;
    if (this.state.startIndex > 0) {
      debugger;
      const newStartIndex = this.state.startIndex -= 1;
      const newEndIndex = this.state.endIndex -= 1;
      this.setState({ startIndex: newStartIndex, endIndex: newEndIndex });
    }
  }

  render() {
    return (
      <div className="gallery-of-thumbnails">
        <div className="up-arrow" onClick={this.decreaseIndexesByOne}>
          <IoIosArrowUp />
        </div>
        {this.indexesToDisplay().map((photo, i) =>
          <EachThumbnail photo={photo} key={i} />
        )}
        <div className="down-arrow" onClick={this.increaseIndexesByOne}>
          <IoIosArrowDown />
        </div>
      </div>
    );
  }
}

export default Thumbnails;
