import React from 'react';
import PropTypes from 'prop-types';
import { BiCheckCircle } from 'react-icons/bi';

class StyleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleStlyeClick = this.handleStlyeClick.bind(this);
  }

  handleStlyeClick(event) {
    const { updateCurrentStyle } = this.props;
    const input = event.target.name;
    updateCurrentStyle(input);
  }

  render() {
    const { style, styleIndex, currentStyle } = this.props;
    if (styleIndex === currentStyle) {
      return (
        <div>
          <img
            src={style.photos[0].thumbnail_url}
            id="style-item"
            name={styleIndex}
            onClick={this.handleStlyeClick}
            alt="button"
          />
          <BiCheckCircle id="tick" />
        </div>
      );
    } else if (styleIndex !== currentStyle){
      return (
        <img
          src={style.photos[0].thumbnail_url}
          id="style-item"
          name={styleIndex}
          onClick={this.handleStlyeClick}
          alt="button"
        />
      );
    }
  }
}

StyleItem.propTypes = {
  style: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
  currentStyle: PropTypes.number.isRequired,
  styleIndex: PropTypes.number.isRequired,
  updateCurrentStyle: PropTypes.func.isRequired,
};

export default StyleItem;
