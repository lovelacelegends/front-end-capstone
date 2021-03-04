import React from 'react';
import AddProductCard from './AddProductCard';

class OutfitContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="outfit-container">
        <AddProductCard />
      </div>
    );
  }
}

export default OutfitContainer;
