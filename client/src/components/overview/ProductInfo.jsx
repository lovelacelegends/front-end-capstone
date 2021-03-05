import React from 'react';
import Price from './Price';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { selectedProduct, styles, currentStyle } = this.props;
    {selectedProduct}
    return (
      <div className="product-info">
        <section id="rating">
          ratings
        </section>
        <section id="category">
          {selectedProduct.category}
        </section>
        <section className="name">
          {selectedProduct.name}
        </section>
        <section className="price">
          <Price
            styles={styles}
            currentStyle={currentStyle}
          />
        </section>
      </div>
    );
  }
}

export default ProductInfo;
