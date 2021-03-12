import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import { AiOutlineExpand } from 'react-icons/ai';
import Thumbnails from './Thumbnails';
import Zoom from './Zoom';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainThumbNailIndex: 0,
      inZoom: false,
    };
    this.leftArrowClick = this.leftArrowClick.bind(this);
    this.rightArrowClick = this.rightArrowClick.bind(this);
    this.thumbnailClick = this.thumbnailClick.bind(this);
    this.toggleZoom = this.toggleZoom.bind(this);
  }

  toggleZoom() {
    const { inZoom } = this.state;
    this.setState({ inZoom: !inZoom });
  }

  leftArrowClick() {
    const { mainThumbNailIndex } = this.state;
    const { styles, currentStyle } = this.props;
    const currentThumbnail = mainThumbNailIndex;
    if (styles.results[currentStyle].photos[currentThumbnail - 1]) {
      this.setState({ mainThumbNailIndex: (currentThumbnail - 1) });
    }
  }

  rightArrowClick() {
    const { mainThumbNailIndex } = this.state;
    const { styles, currentStyle } = this.props;
    const currentThumbnail = mainThumbNailIndex;
    if (styles.results[currentStyle].photos[currentThumbnail + 1]) {
      this.setState({ mainThumbNailIndex: (currentThumbnail + 1) });
    }
  }

  thumbnailClick(event) {
    const { styles, currentStyle } = this.props;
    const arrayOfPhotos = styles.results[currentStyle].photos;
    const newIndex = arrayOfPhotos.map((e) => e.thumbnail_url).indexOf(event.target.src);
    this.setState({ mainThumbNailIndex: newIndex });
  }

  render() {
    const {
      styles,
      currentStyle,
      handleExpandedView,
      displayGroupedExtras,
    } = this.props;
    const {
      mainThumbNailIndex,
      inZoom,
    } = this.state;

    let imageElement;
    if (!displayGroupedExtras && inZoom) {
      imageElement = (
        <Zoom
          img={styles.results[currentStyle].photos[mainThumbNailIndex].url}
          className="large-img-expanded"
          zoomScale={2.5}
          width={1065}
          height={500}
          toggleZoom={this.toggleZoom}
        />
      );
    } else {
      imageElement = (
        <img
          id="large-img"
          className={displayGroupedExtras ? null : 'large-img-expanded'}
          src={styles.results[currentStyle].photos[mainThumbNailIndex].url}
          onClick={displayGroupedExtras ? handleExpandedView : this.toggleZoom}
          role="presentation"
          alt="large"
        />
      );
    }

    return (
      <div id="image-gallery">
        {imageElement}
        <Thumbnails
          styles={styles}
          currentStyle={currentStyle}
          thumbnailClick={this.thumbnailClick}
          mainThumbNailIndex={mainThumbNailIndex}
        />
        <BsArrowLeftShort className="left-arrow clickable" onClick={this.leftArrowClick} />
        <BsArrowRightShort className="right-arrow clickable" onClick={this.rightArrowClick} />
        {inZoom ? null : (<AiOutlineExpand className="expand-button clickable" onClick={handleExpandedView} />)}
      </div>
    );
  }
}

ImageGallery.propTypes = {
  styles: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
  handleExpandedView: PropTypes.func.isRequired,
  currentStyle: PropTypes.number.isRequired,
  displayGroupedExtras: PropTypes.bool.isRequired,
};

export default ImageGallery;
