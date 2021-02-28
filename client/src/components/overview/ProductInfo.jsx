import React from 'react';

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
          <section className="cost">
            {this.props.selectedProduct[0].default_price}
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
