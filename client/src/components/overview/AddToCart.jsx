import React from 'react';
import SizeSelector from './SizeSelector';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="add-to-cart">
        <SizeSelector />
      </div>
    );
  }
}

export default AddToCart;
