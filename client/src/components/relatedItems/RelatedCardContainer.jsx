import React from 'react';
import axios from 'axios';
import RelatedItemCard from './RelatedItemCard';

class RelatedCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfoList: [],
    };
    this.getProductCardInfo = this.getProductCardInfo.bind(this);
  }

  getProductCardInfo() {
    const { relatedProductIds } = this.props;
    const arrayOfPromises = [];

    relatedProductIds.forEach((id) => {
      arrayOfPromises.push(axios.get(`/related/${id}`));
    });

    Promise.all(arrayOfPromises)
      .then((arrayOfProductData) => {
        const dataArray = arrayOfProductData.map((product) => product.data);
        this.setState({
          productInfoList: dataArray,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { productInfoList } = this.state;

    if (productInfoList.length === 0) {
      this.getProductCardInfo();
    }

    return (
      <div className="related-card-container">
        {productInfoList.map((product) => (
          <RelatedItemCard product={product} />
        ))}
      </div>
    );
  }
}

export default RelatedCardContainer;
