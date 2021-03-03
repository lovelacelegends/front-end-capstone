import React from 'react';
import SizeSelector from './SizeSelector';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSku: {},
    };
    this.updateSkuInState = this.updateSkuInState.bind(this);
  }

  updateSkuInState(sku) {
    this.setState({ currentSku: sku });
  }

  render() {
    const { styles, currentStyle } = this.props;
    const { currentSku } = this.state;
    return (
      <div className="add-to-cart">
        <SizeSelector
          styles={styles}
          currentStyle={currentStyle}
          currentSku={currentSku}
          updateSkuInState={this.updateSkuInState}
        />
      </div>
    );
  }
}

export default AddToCart;
