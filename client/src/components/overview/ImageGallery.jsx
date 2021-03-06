import React from 'react';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import Thumbnails from './Thumbnails';
import { AiOutlineExpand } from 'react-icons/Ai';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainThumbNailIndex: 0,
    };
    this.leftArrowClick = this.leftArrowClick.bind(this);
    this.rightArrowClick = this.rightArrowClick.bind(this);
    this.thumbnailClick = this.thumbnailClick.bind(this);
  }

  leftArrowClick() {
    const currentThumbnail = this.state.mainThumbNailIndex
    if(this.props.styles.results[this.props.currentStyle].photos[currentThumbnail -1]) {
      this.setState({ mainThumbNailIndex: (currentThumbnail - 1) });
    }
  }

  rightArrowClick() {
    const currentThumbnail = this.state.mainThumbNailIndex
    if(this.props.styles.results[this.props.currentStyle].photos[currentThumbnail +1]) {
      this.setState({ mainThumbNailIndex: (currentThumbnail + 1) });
    }
  }

  thumbnailClick(event) {
    const arrayOfPhotos = this.props.styles.results[this.props.currentStyle].photos;
    const newIndex = arrayOfPhotos.map((e) => e.thumbnail_url).indexOf(event.target.src);
    this.setState({ mainThumbNailIndex: newIndex });
  }

  render() {
    const { styles, currentStyle, handleExpandedView } = this.props;
    const { mainThumbNailIndex } = this.state;
    return (
      <div className="image-gallery"
      style={{ backgroundImage: `url(${styles.results[currentStyle].photos[mainThumbNailIndex].url})`}}
      >
        <Thumbnails styles={styles} currentStyle={currentStyle} thumbnailClick={this.thumbnailClick}/>
        <div className="both-arrows">
          <BsArrowLeftShort className="left-arrow" onClick={this.leftArrowClick} />
          <BsArrowRightShort className="right-arrow" onClick={this.rightArrowClick} />
        </div>
        <div className="expand-button"><AiOutlineExpand onClick={handleExpandedView} /></div>
      </div>
    );
  }
}

export default ImageGallery;
