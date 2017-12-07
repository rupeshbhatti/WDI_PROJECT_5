import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
// import { Switch, Route } from 'react-router-dom';

import Prescreener from './components/prescreener/Prescreener';

class App extends React.Component {
  state = {
    diagnosis: {},
    conditions: [],
    qusAndch: null
  }

  updateAppState = (PrescreenerComponentState) => {
    this.setState(PrescreenerComponentState);
    this.getDiagnosis(PrescreenerComponentState);
  }

  getDiagnosis = (PrescreenerComponentState) => {
    delete PrescreenerComponentState['text'];

    console.log(PrescreenerComponentState);

    Axios
      .post('/api/getdiagnosis/', PrescreenerComponentState )
      .then(res => {
        console.log(res);
        // const symptoms = [];
        // res.data.mentions.map((mention) => symptoms.push({ id: mention.id, choice_id: mention.choice_id }));
        // this.setState({ symptoms: this.state.symptoms.concat(symptoms) });
      })
      .catch(err => console.log(err));
  }


  render() {

    return (
      <div>
        <Prescreener updateAppState={this.updateAppState}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
