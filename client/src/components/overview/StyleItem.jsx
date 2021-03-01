import React from 'react';

class StyleItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { styles, currentStyle } = this.props;
    return (
      <div className="styleItem">
        StyleItem
      </div>
    );
  }
}

export default StyleItem;
