import React from 'react';
import helper from '../../../../helper';

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
        <img src={helper.urlChecker(photo.thumbnail_url)} alt="thubnail icon" className="each-thumbnail" onClick={thumbnailClick} />
      </div>
    );
  }
}

export default EachThumbnail;
