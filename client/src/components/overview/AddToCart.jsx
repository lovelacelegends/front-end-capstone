import React from 'react';
import SizeSelector from './SizeSelector';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { styles, currentStyle } = this.props;
    return (
      <div className="add-to-cart">
        <SizeSelector styles={styles} currentStyle={currentStyle} />
      </div>
    );
  }
}

export default AddToCart;
