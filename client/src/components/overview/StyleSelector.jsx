import React from 'react';
import StyleItem from './StyleItem';

class StyleSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { styles, currentStyle } = this.props;
    if (styles.product_id) {
      return (
        <div className="styleSelector">
          STYLE > {styles.results[currentStyle].name}
          <div className="styleItems">
            {styles.results.map((style, index)=> <StyleItem style={style} key={index}/>
            )}
          </div>

        </div>
      );
    }
    return (
      <div className="styleSelector">
        StyleSelector
      </div>
    );
  }
}

export default StyleSelector;

/* onclick function that will pass state back up */
