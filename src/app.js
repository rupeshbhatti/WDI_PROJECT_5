import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
// import { Switch, Route } from 'react-router-dom';

import Prescreener from './components/prescreener/Prescreener';
import Interview from './components/interview/Interview';

class App extends React.Component {
  state = {
    diagnosis: {},
    conditions: [],
    qusAndch: []
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
        this.setState(prevState => {
          // console.log('QUESTION',res.data.question.text);
          // console.log('CHOICES',res.data.question.items);
          prevState.qusAndch.push({ question: res.data.question.text, choices: res.data.question.items });
          console.log('PREVS', prevState);
          return prevState;
        });
      })
      .catch(err => console.log(err));
  }


  render() {

    return (
      <div>
        <Prescreener updateAppState={this.updateAppState}/>
        { this.state.qusAndch.length > 0 &&
          <Interview questionAndAnswers={this.state.qusAndch} />
        }
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
