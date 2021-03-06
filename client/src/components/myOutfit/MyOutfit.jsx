import React from 'react';
import PropTypes from 'prop-types';
import OutfitContainer from './OutfitContainer';

class MyOutfit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { currentProduct, currentStyle, styles } = this.props;
    return (
      <div className="related-arrow-holder">
        <div className="related-left-arrow">L</div>
        <div className="outfit-grid-frame">
          <OutfitContainer
            currentProduct={currentProduct}
            currentStyle={currentStyle}
            styles={styles}
          />
        </div>
        <div className="related-right-arrow">R</div>
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
