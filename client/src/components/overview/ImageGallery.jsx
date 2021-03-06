import React from 'react';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import Thumbnails from './Thumbnails';
import { AiOutlineExpand } from 'react-icons/Ai';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { styles, currentStyle, handleExpandedView} = this.props;
    return (
      <div className="image-gallery"
      style={{ backgroundImage: `url(${styles.results[currentStyle].photos[0].url})`}}
      >
        <Thumbnails styles={styles} currentStyle={currentStyle} />
        <div className="both-arrows">
          <BsArrowLeftShort className="left-arrow" />
          <BsArrowRightShort className="right-arrow" />
        </div>
        <div className="expand-button"><AiOutlineExpand onClick={handleExpandedView} /></div>
      </div>
    );
  }
}

export default ImageGallery;
