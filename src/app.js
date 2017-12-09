import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
// import { Switch, Route } from 'react-router-dom';

import Prescreener from './components/prescreener/Prescreener';
import Interview from './components/interview/Interview';
import DisplayCondition from './components/interview/DisplayCondition';

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

        if (res.data.should_stop) {
          this.setState({ should_stop: true });
        } else {
          this.setState(prevState => {
            prevState.qusAndch.push({ question: res.data.question.text, choices: res.data.question.items });
            prevState.conditions = res.data.conditions;
            return prevState;
          });
        }

      })
      .catch(err => console.log(err));
  }

  continueInterview = (e) => {
    e && e.preventDefault();
    console.log(e.target);
    console.log('EVENTTTTTT',e);
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
        prevState.evidence.splice(prevState.evidence.indexOf(obj), 1);
        obj.choice_id = value;
      }

      prevState.evidence.push({ id, choice_id: value });

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
        { this.state.should_stop &&
          <DisplayCondition
            condition={this.state.conditions[0]}
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
