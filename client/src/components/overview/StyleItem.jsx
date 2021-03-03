import React from 'react';

class StyleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleStlyeClick = this.handleStlyeClick.bind(this);
  }

  handleStlyeClick(event) {
    let input = event.target.name;
    this.props.updateCurrentStyle(input);
    console.log("here")
  }

  render() {
    const { style, updateCurrentStyle, styleIndex} = this.props;
    return (
      <img src={style.photos[0].thumbnail_url}
      id="style-item"
      name={styleIndex}
      onClick={this.handleStlyeClick}
      />
    );
  }
}

export default StyleItem;
