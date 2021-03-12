import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

import Header from './header/Header';
import Overview from './overview/Overview';
import RelatedItems from './relatedItems/RelatedItems';
import MyOutfit from './myOutfit/MyOutfit';
// import QuestionsAndAnswers from './questionsAndAnswers/QuestionsAndAnswers';
import RatingsAndReviews from './ratingsAndReviews/RatingsAndReviews';
import ProductOverview from './productOverview/ProductOverview';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: {},
      styles: {},
      currentStyle: 0,
      relatedProductIds: [],
      reviews: {},
      meta: {},
      relatedProductData: [],
    };

    this.getProductData = this.getProductData.bind(this);
    this.getProductReviews = this.getProductReviews.bind(this);
    this.updateCurrentStyle = this.updateCurrentStyle.bind(this);
    this.getMetaData = this.getMetaData.bind(this);
  }

  componentDidMount() {
    // 17734
    this.getProductData('17074');
  }

  getProductData(id) {
    axios.get(`/products/${id}`)
      .then((data) => {
        this.setState({
          selectedProduct: data.data[0],
          styles: data.data[1],
          relatedProductIds: [...new Set(data.data[2])],
          reviews: data.data[3],
          meta: data.data[4],
          currentStyle: 0,
        });
      })
      .then(() => {
        const { relatedProductIds } = this.state;
        // const nonDuplicates = [...new Set(relatedProductIds)];
        const arrayOfPromises = [];

        relatedProductIds.forEach((relatedID) => {
          arrayOfPromises.push(axios.get(`/related/${relatedID}`));
        });

        return Promise.all(arrayOfPromises);
      })
      .then((arrayOfProductData) => {
        const dataArray = arrayOfProductData.map((product) => product.data);
        this.setState({
          relatedProductData: dataArray,
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }

  getProductReviews(id, sort = 'relevant') {
    axios.get(`/reviews/${id}`, { params: { id, sort } })
      .then((response) => {
        this.setState({
          reviews: response.data[0],
          meta: response.data[1],
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }

  getMetaData(id) {
    axios.get('/reviews/meta', { product_id: id })
      .then((response) => {
        this.setState({
          meta: response.data,
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }

  updateCurrentStyle(input) {
    this.setState({ currentStyle: Number(input) });
  }

  render() {
    const {
      selectedProduct,
      styles,
      currentStyle,
      relatedProductIds,
      reviews,
      meta,
      relatedProductData,
    } = this.state;

    return (
      <div id="app-container">
        <Header />
        <Overview
          selectedProduct={selectedProduct}
          styles={styles}
          currentStyle={currentStyle}
          updateCurrentStyle={this.updateCurrentStyle}
          reviews={reviews}
          meta={meta}
        />
        <ProductOverview
          selectedProduct={selectedProduct}
        />
        <RelatedItems
          relatedProductIds={relatedProductIds}
          selectedProduct={selectedProduct}
          relatedProductData={relatedProductData}
          getProductData={this.getProductData}
        />
        <MyOutfit
          currentProduct={selectedProduct}
          styles={styles}
          currentStyle={currentStyle}
        />
        {/* <QuestionsAndAnswers /> */}
        <RatingsAndReviews
          key={selectedProduct.id}
          getProductReviews={this.getProductReviews}
          getMetaData={this.getMetaData}
          selectedProduct={selectedProduct}
          reviews={reviews}
          meta={meta}
        />
      </div>
    );
  }
}

export default App;
