import React from 'react';
import PropTypes from 'prop-types';
import RelatedItemCard from './RelatedItemCard';

class RelatedCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      selectedProduct,
      currentPosition,
      updateModal,
      relatedProductData,
      getProductData,
      resetState,
    } = this.props;

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
                resetState={resetState}
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
  resetState: PropTypes.func.isRequired,
  relatedProductData: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.object,
    ]),
  ).isRequired,
  getProductData: PropTypes.func.isRequired,
  updateModal: PropTypes.func.isRequired,
  currentPosition: PropTypes.number.isRequired,
  selectedProduct: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
};

export default RelatedCardContainer;
