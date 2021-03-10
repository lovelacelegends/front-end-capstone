/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import AddProductCard from './AddProductCard';
import OutfitCard from './OutfitCard';

class OutfitContainer extends React.Component {
  static gatherObjects() {
    const localStorageObjects = Object.values(localStorage);
    const newArray = localStorageObjects.map((productObj) => JSON.parse(productObj));
    return newArray;
  }

  constructor(props) {
    super(props);
    this.state = {
      currentStorageArray: [],
    };
    this.addToStorage = this.addToStorage.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    if (localStorage.length !== 0) {
      const updatedStorage = OutfitContainer.gatherObjects();
      this.setState({
        currentStorageArray: updatedStorage,
      });
    }
  }

  handleDelete(id) {
    const { updateStorageCount } = this.props;
    localStorage.removeItem(id);
    const updatedStorage = OutfitContainer.gatherObjects();
    updateStorageCount();
    this.setState({
      currentStorageArray: updatedStorage,
    });
  }

  addToStorage() {
    const {
      currentProduct,
      currentStyle,
      styles,
      updateStorageCount,
    } = this.props;

    const { currentStorageArray } = this.state;

    const productToStore = {
      id: currentProduct.id,
      productName: currentProduct.name,
      styleName: styles.results[currentStyle].name,
      url: styles.results[currentStyle].photos[0].url,
    };

    localStorage.setItem(currentProduct.id, JSON.stringify(productToStore));

    const updatedStorage = OutfitContainer.gatherObjects();
    if (currentStorageArray.length !== localStorage.length) {
      updateStorageCount();
    }
    this.setState({
      currentStorageArray: updatedStorage,
    });
  }

  render() {
    const { currentStorageArray } = this.state;
    const { currentPosition } = this.props;

    let outfitList;
    if (currentStorageArray.length !== 0) {
      outfitList = currentStorageArray.map((product) => (
        <OutfitCard
          key={product.id}
          product={product}
          handleDelete={this.handleDelete}
        />
      ));
    } else {
      outfitList = (
        <div id="add-outfit-message">
          Click + to Start Building Your Outfit!
        </div>
      );
    }

    return (
      <div className="outfit-container">
        <AddProductCard addToStorage={this.addToStorage} />
        <div className="outfit-container-track">
          <div className="outfit-container-slider" style={{ transform: `translateX(${currentPosition}px)` }}>
            {outfitList}
          </div>
        </div>
      </div>
    );
  }
}

OutfitContainer.propTypes = {
  updateStorageCount: PropTypes.func.isRequired,
  currentPosition: PropTypes.number.isRequired,
  currentStyle: PropTypes.number.isRequired,
  currentProduct: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array,
    ]),
  ).isRequired,
  styles: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]),
  ).isRequired,
};

export default OutfitContainer;
