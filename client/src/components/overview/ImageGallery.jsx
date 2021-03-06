import React from 'react';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import Thumbnails from './Thumbnails';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { styles, currentStyle, selectedProduct} = this.props;
    return (
      <div className="image-gallery"
      style={{ backgroundImage: `url(${styles.results[currentStyle].photos[0].url})`}}
      >
          <BsArrowLeftShort className="left-arrow" />
          <BsArrowRightShort className="right-arrow" />
          <Thumbnails styles={styles} currentStyle={currentStyle}/>
      </div>
    );
  }
}

export default ImageGallery;
