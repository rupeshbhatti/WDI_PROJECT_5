import React from 'react';
import ReactDOM from 'react-dom';

import PatientGender from './components/prescreener/PatientGender';

class App extends React.Component {

  render() {

    return (
      <div>
        <PatientGender />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
