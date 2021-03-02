import React from 'react';
import { GrFormCheckmark } from "react-icons/gr";

class StyleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleStlyeClick = this.handleStlyeClick.bind(this);
  }

  handleStlyeClick(event) {
    let input = event.target.name;
    debugger;
    this.props.updateCurrentStyle(input);
  }

  render() {
    const { style, updateCurrentStyle, styleIndex, currentStyle } = this.props;
    if (styleIndex === Number(currentStyle)) {
      debugger;
      return (
      <div>
        <img src={style.photos[0].thumbnail_url}
        id="style-item"
        name={styleIndex}
        onClick={this.handleStlyeClick}
        />
        <GrFormCheckmark />
      </div>
      );
    } else if (styleIndex !== Number(currentStyle)){
      debugger;
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
