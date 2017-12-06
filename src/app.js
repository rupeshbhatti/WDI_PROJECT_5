import React from 'react';
import ReactDOM from 'react-dom';
// import { Switch, Route } from 'react-router-dom';

import Prescreener from './components/prescreener/Prescreener';

class App extends React.Component {
  state = {
    diagnosis: {},
    user: {},
    conditions: [],
    qusAndch: null
  }

  render() {

    return (
      <div>
        <Prescreener/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
