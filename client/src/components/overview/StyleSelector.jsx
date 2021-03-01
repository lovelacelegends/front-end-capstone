import React from 'react';
import StyleItem from './StyleItem';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    debugger;
    const { styles, currentStyle } = this.props;
    return (
      <div className="styleSelector">
        StyleSelector
      </div>
    );
  }
}

export default StyleSelector;

/* onclick function that will pass state back up */
