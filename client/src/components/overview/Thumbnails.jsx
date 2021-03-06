import React from 'react';
import EachThumbnail from './EachThumbnail';

class Thumbnails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {currentStyle, styles} = this.props;
    return (
      <div className="gallery-thumbnail">
        {styles.results[currentStyle].photos.map((photo, i) =>
          <EachThumbnail photo={photo} key={i} />
        )}
      </div>
    );
  }
}

export default Thumbnails;
