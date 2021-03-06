import React from 'react';

class EachThumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {photo} = this.props;
    return (
      <div>
        <img src={photo.thumbnail_url} alt="thubnail icon" className="each-thumbnail" />
      </div>
    );
  }
}

export default EachThumbnail;
