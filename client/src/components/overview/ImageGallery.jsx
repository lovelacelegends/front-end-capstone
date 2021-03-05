import React from 'react';
import {BsArrowRightShort, BsArrowLeftShort} from 'react-icons/bs';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { styles, currentStyle, selectedProduct} = this.props;
    return (
      <div className="image-gallery"
      style={{ backgroundImage: `url(${styles.results[currentStyle].photos[0].thumbnail_url})`}}
      >
          <BsArrowLeftShort className="left-arrow" />
          <BsArrowRightShort className="right-arrow" />
      </div>
    );
  }
}

export default ImageGallery;

/**<img id='main-image' src={styles.results[currentStyle].photos[0].url} /> */