import React from 'react';
import OutfitLeftArrow from './OutfitLeftArrow';
import OutfitRightArrow from './OutfitRightArrow';
import OutfitContainer from './OutfitContainer';

class MyOutfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="related-items-grid-frame">
        <OutfitLeftArrow />
        <OutfitContainer />
        <OutfitRightArrow />
      </div>
    );
  }
}

export default MyOutfit;
