import React from 'react';

class EachThumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {photo, thumbnailClick, index } = this.props;
    return (
      <div>
        <img src={photo.thumbnail_url} alt="thubnail icon" className="each-thumbnail" onClick={thumbnailClick} />
      </div>
    );
  }
}

export default EachThumbnail;
