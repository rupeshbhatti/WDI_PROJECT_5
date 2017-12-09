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

    Axios
      .post('/api/getdiagnosis/', PrescreenerComponentState )
      .then(res => {
        console.log('getdiagnosis res', res);
        this.setState(prevState => {
          prevState.qusAndch.push({ question: res.data.question.text, choices: res.data.question.items });
          return prevState;
        });
      })
      .catch(err => console.log(err));
  }

  continueInterview = (e) => {
    e && e.preventDefault();
    const stateSnapShot = Object.assign({}, this.state);

    delete stateSnapShot['conditions'];
    delete stateSnapShot['diagnosis'];
    delete stateSnapShot['qusAndch'];
    // console.log('stateSnapShot',stateSnapShot);
    // console.log('this.state', this.state);
    this.getDiagnosis(stateSnapShot);
  }

  handleDiagnosisQuestionRadio = ({ target: { value, id }}) => {
    this.setState(prevState => {
      const obj = prevState.evidence.find(riskfactor => riskfactor.id === id);

      if (obj) {
        if (value === 'unknown') prevState.evidence.splice(prevState.evidence.indexOf(obj), 1);
        obj.choice_id = value;
      } else {
        if (value !== 'unknown') prevState.evidence.push({ id, choice_id: value });
      }

      return prevState;
    });
  }


  render() {

    return (
      <div>
        <Prescreener updateAppState={this.updateAppState}/>
        { this.state.qusAndch.length > 0 &&
          <Interview
            questionAndAnswers={this.state.qusAndch}
            radioHandler={this.handleDiagnosisQuestionRadio}
            continueInterview={this.continueInterview}
          />
        }
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
