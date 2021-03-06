import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import RelatedItemCard from './RelatedItemCard';

class RelatedCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfoList: [],
    };
    // this.getProductCardInfo = this.getProductCardInfo.bind(this);
  }

  // getProductCardInfo() {
  //   const { relatedProductIds } = this.props;
  //   const arrayOfPromises = [];

  //   relatedProductIds.forEach((id) => {
  //     arrayOfPromises.push(axios.get(`/related/${id}`));
  //   });

  //   Promise.all(arrayOfPromises)
  //     .then((arrayOfProductData) => {
  //       const dataArray = arrayOfProductData.map((product) => product.data);
  //       this.setState({
  //         productInfoList: dataArray,
  //       });
  //     })
  //     .catch((error) => {
  //       // eslint-disable-next-line no-console
  //       console.log(error);
  //     });
  // }

  render() {
    // const { productInfoList } = this.state;
    const { selectedProduct, currentPosition, updateModal, relatedProductData, getProductData } = this.props;
    // debugger;
    // if (productInfoList.length === 0) {
    //   this.getProductCardInfo();
    // }
    let productListDiv;
    if (relatedProductData.length !== 0) {
      productListDiv = (
        <div className="related-card-container">
          <div
            className="related-card-container-slider"
            style={{ transform: `translateX(${currentPosition}px)` }}
          >
            {relatedProductData.map((product) => (
              <RelatedItemCard
                key={product.id}
                product={product}
                selectedProduct={selectedProduct}
                updateModal={updateModal}
                getProductData={getProductData}
              />
            ))}
          </div>
        </div>
      );
    } else {
      productListDiv = (
        <div>
          loading...
        </div>
      );
    }

    return productListDiv;
  }
}

RelatedCardContainer.propTypes = {
  updateModal: PropTypes.func.isRequired,
  currentPosition: PropTypes.number.isRequired,
  relatedProductIds: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number]),
  ).isRequired,
  selectedProduct: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
};

export default RelatedCardContainer;
