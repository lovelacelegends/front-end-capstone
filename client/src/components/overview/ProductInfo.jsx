import React from 'react';
import Price from './Price';

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    if (this.props.selectedProduct.length > 0) {
      return (
        <div className="productInfo">
          <section id="rating">
            ratings
          </section>
          <section id="category">
            {this.props.selectedProduct[0].category}
          </section>
          <section className="name">
            {this.props.selectedProduct[0].name}
          </section>
          <section className="price">
            <Price styles={this.props.selectedProduct[1]} />
          </section>
        </div>
      );
    }
    return (
      <div>
        loding
      </div>
    );
  }
}

export default ProductInfo;
