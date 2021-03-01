import React from 'react';
import axios from 'axios';
import Header from './header/Header';
import Overview from './overview/Overview';
import RelatedItems from './relatedItems/RelatedItems';
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
    };
  }

  componentDidMount() {
    axios.get('/products/17764')
      .then((data) => {
        this.setState({
          selectedProduct: data.data[0],
          styles: data.data[1],
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  render() {
    const { selectedProduct, styles, currentStyle } = this.state;
    return (
      <div>
        REACT IS RUNNING
        <Header />
        <Overview
          selectedProduct={selectedProduct}
          styles={styles}
          currentStyle={currentStyle}
        />
        <ProductOverview
          selectedProduct={selectedProduct}
        />
        <RelatedItems />
        <QuestionsAndAnswers />
        <RatingsAndReviews />
      </div>
    );
  }
}

export default App;
