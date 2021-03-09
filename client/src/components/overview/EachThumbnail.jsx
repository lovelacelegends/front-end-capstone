import React from 'react';
import PropTypes from 'prop-types';

class EachThumbnail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { photo, thumbnailClick } = this.props;
    return (
      <div>
        <img
          src={photo.thumbnail_url}
          alt="thubnail icon"
          className="each-thumbnail"
          onClick={thumbnailClick}
          onKeyPress={thumbnailClick}
          role="presentation"
        />
      </div>
    );
  }
}

EachThumbnail.propTypes = {
  thumbnailClick: PropTypes.func.isRequired,
  photo: PropTypes.string.isRequired,
};

export default EachThumbnail;
