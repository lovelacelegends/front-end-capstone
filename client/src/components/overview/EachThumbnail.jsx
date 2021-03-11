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
    let url = photo.thumbnail_url;
    if (url[0] === 'u') {
      photo.thumbnail_url = url.substring(1);
      url = photo.thumbnail_url;
    }
    return (
      <div>
        <img
          src={url}
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
  photo: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]),
  ).isRequired,
};

export default EachThumbnail;
