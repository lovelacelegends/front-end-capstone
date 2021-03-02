import React from 'react';

class SizeSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { styles, currentStyle } = this.props;
    const objOfSkus = styles.results[currentStyle].skus
    return (
      <div className="size-selector">
        <select>
          <option>SELECT SIZE</option>
          <option>sizes</option>
        </select>
      </div>
    );
  }
}

export default SizeSelector;
