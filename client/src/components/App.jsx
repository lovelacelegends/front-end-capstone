import React from 'react';
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
    };
    this.updateCurrentStyle = this.updateCurrentStyle.bind(this);
  }

  updateCurrentStyle (input) {
    debugger;
    this.setState({ currentStyle: input });
  }

  componentDidMount() {
    axios.get('/products/17764')
      .then((data) => {
        console.log("axios")
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
        <RelatedItems />
        <MyOutfit />
        <QuestionsAndAnswers />
        <RatingsAndReviews />
      </div>
    );
  }
}

export default App;
