import React from 'react';
import { BiCheckCircle } from "react-icons/bi";

class StyleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleStlyeClick = this.handleStlyeClick.bind(this);
  }

  handleStlyeClick(event) {
<<<<<<< HEAD
    const { updateCurrentStyle } = this.props;
    const input = event.target.name;
    updateCurrentStyle(input);
=======
    let input = event.target.name;
    this.props.updateCurrentStyle(input);
    console.log("here")
>>>>>>> 32c185fb5810e1db37e2a597d94b8fa21c2baf33
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
