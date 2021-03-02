import React from 'react';

class StyleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { style } = this.props;
    return (
      <img src={style.photos[0].thumbnail_url} className="styleItem" />
    );
  }
}

export default StyleItem;
