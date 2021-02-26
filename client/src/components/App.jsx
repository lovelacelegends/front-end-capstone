import React from 'react';
import axios from 'axios';
import Header from './header/Header';
import Overview from './overview/Overview';
import RelatedItems from './relatedItems/RelatedItems';
import QuestionsAndAnswers from './questionsAndAnswers/QuestionsAndAnswers';
import RatingsAndReviews from './ratingsAndReviews/RatingsAndReviews';

class App extends React.Component {
  componentDidMount() {
    axios.get('/banana')
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log(data.data);
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
        <Overview />
        <RelatedItems />
        <QuestionsAndAnswers />
        <RatingsAndReviews />
      </div>
    );
  }
}

export default App;
