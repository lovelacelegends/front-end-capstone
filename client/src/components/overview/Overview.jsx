/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import PropTypes from 'prop-types';
import ProductInfo from './ProductInfo';
import StyleSelector from './StyleSelector';
import ImageGallery from './ImageGallery';
import AddToCart from './AddToCart';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayGroupedExtras: true,
    };
    this.handleExpandedView = this.handleExpandedView.bind(this);
    this.resetThumbnail = this.resetThumbnail.bind(this);
  }

  handleExpandedView() {
    this.setState((state) => ({
      displayGroupedExtras: !state.displayGroupedExtras,
    }));
  }

  resetThumbnail() {
    this.setState({ mainThumbNailIndex: 0 });
  }

  render() {
    const {
      selectedProduct,
      styles,
      currentStyle,
      updateCurrentStyle,
      reviews,
      meta,
    } = this.props;
    const { displayGroupedExtras, mainThumbNailIndex } = this.state;
    if (!selectedProduct.name || currentStyle === undefined) {
      return (
        <div>
          loading
        </div>
      );
    }
    const imageGallery = (
      <ImageGallery
        key={styles.results[currentStyle].style_id}
        selectedProduct={selectedProduct}
        styles={styles}
        currentStyle={currentStyle}
        handleExpandedView={this.handleExpandedView}
        mainThumbNailIndex={mainThumbNailIndex}
        displayGroupedExtras={displayGroupedExtras}
      />
    );
    const groupedExtras = (
      <div className="grouped-extras">
        <ProductInfo
          selectedProduct={selectedProduct}
          styles={styles}
          currentStyle={currentStyle}
          reviews={reviews}
          meta={meta}
        />
        <StyleSelector
          styles={styles}
          currentStyle={currentStyle}
          updateCurrentStyle={updateCurrentStyle}
        />
        <AddToCart
          styles={styles}
          currentStyle={currentStyle}
          key={styles.results[currentStyle].style_id + 1}
        />
      </div>
    );
    if (displayGroupedExtras) {
      return (
        <div className="overview-with-extras">
          {imageGallery}
          {groupedExtras}
        </div>
      );
    }
    return (
      <div className="overview-without-extras">
        {imageGallery}
      </div>
    );
  }
}

Overview.propTypes = {
  styles: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
  selectedProduct: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
  reviews: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
  meta: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
  ).isRequired,
  updateCurrentStyle: PropTypes.func.isRequired,
  currentStyle: PropTypes.number.isRequired,
};

export default Overview;
