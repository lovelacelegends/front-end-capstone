import React from 'react';
import { BiCheckCircle } from "react-icons/bi";

class StyleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleStlyeClick = this.handleStlyeClick.bind(this);
  }

  handleStlyeClick(event) {
    let input = event.target.name;
    this.props.updateCurrentStyle(input);
  }

  render() {
    const { style, styleIndex, currentStyle } = this.props;
    if (styleIndex === currentStyle) {
      return (
      <div>
        <img src={style.photos[0].thumbnail_url}
        id="style-item"
        name={styleIndex}
        onClick={this.handleStlyeClick}
        />
        <BiCheckCircle id="tick" />
      </div>
      );
    } else if (styleIndex !== currentStyle){
      return (
        <img src={style.photos[0].thumbnail_url}
        id="style-item"
        name={styleIndex}
        onClick={this.handleStlyeClick}
        />
      );
    }
  }
}

export default StyleItem;
