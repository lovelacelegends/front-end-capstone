/* eslint-disable consistent-return */
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
        <div className="style-item-div">
          <img
            src={style.photos[0].thumbnail_url}
            id="style-item"
            name={styleIndex}
            onClick={this.handleStlyeClick}
            alt="button"
            onKeyPress={this.handleStlyeClick}
            role="presentation"
            className="clickable"
          />
          <BiCheckCircle id="tick" />
        </div>
      );
    } if (styleIndex !== currentStyle) {
      return (
        <div className="style-item-div">
          <img
            src={style.photos[0].thumbnail_url}
            id="style-item"
            name={styleIndex}
            onClick={this.handleStlyeClick}
            alt="button"
            onKeyPress={this.handleStlyeClick}
            role="presentation"
            className="clickable"
          />
        </div>

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
      PropTypes.bool,
      PropTypes.objectOf(
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
          PropTypes.objectOf(
            PropTypes.oneOfType([
              PropTypes.string,
              PropTypes.number,
            ]),
          ),
        ]),
      ),
    ]),
  ).isRequired,
  currentStyle: PropTypes.number.isRequired,
  styleIndex: PropTypes.number.isRequired,
  updateCurrentStyle: PropTypes.func.isRequired,
};

export default StyleItem;
