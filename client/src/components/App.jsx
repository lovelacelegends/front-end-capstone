import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

import Header from './header/Header';
import Overview from './overview/Overview';
import RelatedItems from './relatedItems/RelatedItems';
import MyOutfit from './myOutfit/MyOutfit';
import QuestionsAndAnswers from './questionsAndAnswers/QuestionsAndAnswers';
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
    };

    this.getProductData = this.getProductData.bind(this);
    this.updateCurrentStyle = this.updateCurrentStyle.bind(this);
  }

  componentDidMount() {
    // 17734
    this.getProductData('17744');
  }

  getProductData(id) {
    axios.get(`/products/${id}`)
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log('axios: ', data.data);

        this.setState({
          selectedProduct: data.data[0],
          styles: data.data[1],
          relatedProductIds: data.data[2],
          reviews: data.data[3],
          meta: data.data[4],
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
    } = this.state;

    return (
      <div>
        <Header />
        <Overview
          selectedProduct={selectedProduct}
          styles={styles}
          currentStyle={currentStyle}
          updateCurrentStyle={this.updateCurrentStyle}
        />
        <ProductOverview
          selectedProduct={selectedProduct}
        />
        <RelatedItems
          relatedProductIds={relatedProductIds}
          selectedProduct={selectedProduct}
        />
        <MyOutfit
          currentProduct={selectedProduct}
          styles={styles}
          currentStyle={currentStyle}
        />
        <QuestionsAndAnswers />
        <RatingsAndReviews
          reviews={reviews}
          meta={meta}
        />
      </div>
    );
  }
}

export default App;
