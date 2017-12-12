import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import scollToComponent from 'react-scroll-to-component';

import './scss/style.scss';

import Home from './components/welcome/Home';
//import Navbar from './components/utilities/Navbar';
import PatientGender from './components/prescreener/PatientGender';
import PatientAge from './components/prescreener/PatientAge';
import PatientCountries from './components/prescreener/PatientCountries';
import RiskFactors from './components/prescreener/RiskFactors';
import PatientSymptoms from './components/prescreener/PatientSymptoms';
import Interview from './components/interview/Interview';
import DisplayCondition from './components/interview/DisplayCondition';
//import GooglePlaces from './components/interview/GooglePlaces';

class App extends React.Component {
  state = {
    sex: 'male',
    age: 30,
    text: '',
    evidence: [],
    conditions: [],
    qusAndch: [],
    visibleComponent: ['Home']
  }

  switchVisibleComponent = (e) => {
    e.preventDefault();

    const newArr = [];
    newArr.push(e.target.value);
    e.target.value && this.setState(prevState => {
      prevState.visibleComponent = prevState.visibleComponent.concat(newArr);

      return prevState;
    });


  }

  handleGenderRadio = (e) => {
    this.setState({ 'sex': e.target.value });
  }

  handleAgeSlider = (e) => {
    this.setState({ 'age': e });
  }

  handleCountrySelector = (countryCode) => {
    const evidence = [];

    // if selected country isn't already in the array, then add
    if (!this.state.evidence.find(country => country.id === countryCode)){
      evidence.push({ id: countryCode, choice_id: 'present', initial: true});
      this.setState({ evidence: this.state.evidence.concat(evidence) });
    } else {
      // else remove the country i.e. toggle select
      const filteredCountries = this.state.evidence.filter(country => {
        return country.id !== countryCode;
      });
      this.setState({ evidence: filteredCountries });
    }
  }

  handleRiskFactorRadio = ({ target: { value, id }}) => {
    this.setState(prevState => {
      const obj = prevState.evidence.find(riskfactor => riskfactor.id === id);

      if (obj) {
        prevState.evidence.splice(prevState.evidence.indexOf(obj), 1);
        obj.choice_id = value;
      }

      prevState.evidence.push({ id, choice_id: value, initial: true });


      return prevState;
    });
  }

  handleSymptomInput = (e) => {
    //this.setState({ text: e.target.value}); USE THIS WITH NON-AUTOCOMPLETE INPUT FIELD
    this.setState({ text: e.value });
  }

  parseSymptoms = (e) => {
    e && e.preventDefault();

    Axios
      .post('/api/getparsedsymptoms/', { text: this.state.text })
      .then(res => {
        const evidence = [];
        res.data.mentions && res.data.mentions.map((mention) => evidence.push({ id: mention.id, choice_id: mention.choice_id, initial: true }));

        if (evidence.length > 0){
          this.setState({ evidence: this.state.evidence.concat(evidence) });
        }
        delete this.state['text'];
        //this.props.updateAppState(this.state);
        this.getDiagnosis();

      })
      .catch(err => console.log(err));
  }

  // updateAppState = (PrescreenerComponentState) => {
  //   this.setState(PrescreenerComponentState);
  //   this.getDiagnosis(PrescreenerComponentState);
  // }

  getDiagnosis = () => {
    const obj = Object.assign({}, this.state);
    delete obj['qusAndch'];
    delete obj['visibleComponent'];
    delete obj['conditions'];

    Axios
      .post('/api/getdiagnosis/', obj )
      .then(res => {

        if (res.data.should_stop) {
          this.setState({ should_stop: true, visibleComponent: 'DisplayCondition' });
        } else {
          this.setState(prevState => {
            prevState.qusAndch.push({ question: res.data.question.text, choices: res.data.question.items });
            prevState.conditions = res.data.conditions;
            prevState.visibleComponent.push('Interview');
            return prevState;
          });
        }

      })
      .catch(err => console.log(err));
  }

  continueInterview = (e) => {
    e && e.preventDefault();
    const stateSnapShot = Object.assign({}, this.state);

    delete stateSnapShot['conditions'];
    delete stateSnapShot['qusAndch'];

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
        {/* <Navbar /> */}
        {this.state.visibleComponent[this.state.visibleComponent.length -1 ] === ('Home')  &&
          <Home
            switchVisibleComponent={this.switchVisibleComponent}
          />
        }
        {this.state.visibleComponent[this.state.visibleComponent.length -1 ] === ('PatientGender') &&
          <PatientGender
            switchVisibleComponent={this.switchVisibleComponent}
            handleGenderRadio={this.handleGenderRadio}
          />
        }
        {this.state.visibleComponent[this.state.visibleComponent.length -1 ] === ('PatientAge') &&
          <PatientAge
            handleAgeSlider={this.handleAgeSlider}
            value={this.state.age}
            switchVisibleComponent={this.switchVisibleComponent}
          />
        }
        {this.state.visibleComponent[this.state.visibleComponent.length -1 ] === ('PatientCountries') &&
          <PatientCountries
            handleCountrySelector={this.handleCountrySelector}
            switchVisibleComponent={this.switchVisibleComponent}
          />
        }
        {this.state.visibleComponent[this.state.visibleComponent.length -1 ] === ('RiskFactors') &&
          <RiskFactors
            handleRiskFactorRadio={this.handleRiskFactorRadio}
            switchVisibleComponent={this.switchVisibleComponent}
          />
        }
        {this.state.visibleComponent[this.state.visibleComponent.length -1 ] === ('PatientSymptoms') &&
          <PatientSymptoms
            handleSymptomInput={this.handleSymptomInput}
            parseSymptoms={this.parseSymptoms}
            switchVisibleComponent={this.switchVisibleComponent}
          />
        }
        {this.state.visibleComponent[this.state.visibleComponent.length -1 ] === ('Interview') && this.state.qusAndch.length > 0 &&
          <Interview
            questionAndAnswers={this.state.qusAndch}
            radioHandler={this.handleDiagnosisQuestionRadio}
            continueInterview={this.continueInterview}
            parseSymptoms={this.parseSymptoms}
          />
        }
        {this.state.visibleComponent[this.state.visibleComponent.length -1 ] === ('DisplayCondition') &&
          <DisplayCondition
            condition={this.state.conditions[0]}
          />
        }
        {/* {this.state.visibleComponent === 'GooglePlaces' &&
          <GooglePlaces />
        } */}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
