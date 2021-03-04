import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

    this.updateCurrentStyle = this.updateCurrentStyle.bind(this);
  }

  componentDidMount() {
    axios.get('/products/17859')
      .then((data) => {
        console.log('axios: ', data);
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
        console.log(error);
      });
  }

  updateCurrentStyle(input) {
    this.setState({ currentStyle: input });
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
        <RelatedItems relatedProductIds={relatedProductIds} />
        <MyOutfit />
        <QuestionsAndAnswers />
        <RatingsAndReviews reviews={reviews} meta={meta} />
      </div>
    );
  }
}

export default App;
