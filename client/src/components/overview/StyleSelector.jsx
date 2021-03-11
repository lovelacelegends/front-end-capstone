/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import StyleItem from './StyleItem';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { styles, currentStyle, updateCurrentStyle } = this.props;
    if (styles.product_id) {
      return (
        <div className="style-selector">
          <div>
            {'STYLE > '}
            {styles.results[currentStyle].name}
          </div>
          <div id="style-items">
            {styles.results.map((style, index) => <StyleItem style={style} key={index} styleIndex={index} updateCurrentStyle={updateCurrentStyle} currentStyle={currentStyle} />)}
          </div>
        </div>
      );
    }
    return (
      <div className="style-selector">
        StyleSelector
      </div>
    );
  }
}

StyleSelector.propTypes = {
  styles: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
  currentStyle: PropTypes.number.isRequired,
  updateCurrentStyle: PropTypes.func.isRequired,
};

export default StyleSelector;
