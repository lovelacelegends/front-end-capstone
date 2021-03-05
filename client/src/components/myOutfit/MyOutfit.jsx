import React from 'react';
import PropTypes from 'prop-types';
import OutfitLeftArrow from './OutfitLeftArrow';
import OutfitRightArrow from './OutfitRightArrow';
import OutfitContainer from './OutfitContainer';

class MyOutfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { currentProduct, currentStyle, styles } = this.props;
    return (
      <div className="related-items-grid-frame">
        <OutfitLeftArrow />
        <OutfitContainer
          currentProduct={currentProduct}
          currentStyle={currentStyle}
          styles={styles}
        />
        <OutfitRightArrow />
      </div>
    );
  }
}

MyOutfit.propTypes = {
  currentStyle: PropTypes.number.isRequired,
  currentProduct: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
  styles: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]),
  ).isRequired,
};

export default MyOutfit;
