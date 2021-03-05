/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import AddProductCard from './AddProductCard';

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
  }

  componentDidMount() {
    if (localStorage.length !== 0) {
      const updatedStorage = OutfitContainer.gatherObjects();
      this.setState({
        currentStorageArray: updatedStorage,
      });
    }
  }

  addToStorage() {
    const { currentProduct, currentStyle, styles } = this.props;

    const productToStore = {
      productName: currentProduct.name,
      styleName: styles.results[currentStyle].name,
      url: styles.results[currentStyle].photos[0].url,
    };

    localStorage.setItem(currentProduct.id, JSON.stringify(productToStore));

    const updatedStorage = OutfitContainer.gatherObjects();
    this.setState({
      currentStorageArray: updatedStorage,
    });
  }

  render() {
    // const { currentStorageArray } = this.state;
    // let outfitList = currentStorageArray.length ? currentStorageArray[0] : 'nothing';
    return (
      <div
        className="outfit-container"
        onClick={this.addToStorage}
        onKeyPress={this.addToStorage}
        role="button"
        tabIndex={0}
      >
        <AddProductCard />
        {/* {outfitList} */}
      </div>
    );
  }
}

OutfitContainer.propTypes = {
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
