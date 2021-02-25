import React from 'react';
import axios from 'axios';

// const App = () => (
//   <div> REACT ME BABY </div>
// );

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
      </div>
    );
  }
}

export default App;
