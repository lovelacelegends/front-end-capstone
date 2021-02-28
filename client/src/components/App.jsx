import React from 'react';
import axios from 'axios';
import Header from './header/Header';
import Overview from './overview/Overview';
import RelatedItems from './relatedItems/RelatedItems';
import QuestionsAndAnswers from './questionsAndAnswers/QuestionsAndAnswers';
import RatingsAndReviews from './ratingsAndReviews/RatingsAndReviews';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: [],
    };
  }

  componentDidMount() {
    axios.get('/products/17764')
      .then((data) => {
        this.setState({ selectedProduct: data.data });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        REACT IS RUNNING
        <Header />
        <Overview selectedProduct={this.state.selectedProduct} />
        <RelatedItems />
        <QuestionsAndAnswers />
        <RatingsAndReviews />
      </div>
    );
  }
}

export default App;
