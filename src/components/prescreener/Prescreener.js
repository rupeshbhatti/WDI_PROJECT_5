import React from 'react';
import Axios from 'axios';

import PatientGender from './PatientGender';
import PatientAge from './PatientAge';
import PatientCountries from './PatientCountries';
import RiskFactors from './RiskFactors';
import PatientSymptoms from './PatientSymptoms';

class Prescreener extends React.Component {
  state = {
    sex: 'male',
    age: 30,
    evidence: [],
    text: ''
  }

  // handleGenderRadio = (e) => {
  //   this.setState({ 'sex': e.target.value });
  // }

  // handleAgeSlider = (e) => {
  //   this.setState({ 'age': e });
  // }

  // handleCountrySelector = (e) => {
  //   const evidence = [];
  //
  //   // if selected country isn't already in the array, then add
  //   if (!this.state.evidence.find(country => country.id === e.target.value)){
  //     evidence.push({ id: e.target.value, choice_id: 'present', initial: true});
  //     this.setState({ evidence: this.state.evidence.concat(evidence) });
  //   } else {
  //     // else remove the country i.e. toggle select
  //     const filteredCountries = this.state.evidence.filter(country => {
  //       return country.id !== e.target.value;
  //     });
  //     this.setState({ evidence: filteredCountries });
  //   }
  // }

  // handleRiskFactorRadio = ({ target: { value, id }}) => {
  //   this.setState(prevState => {
  //     const obj = prevState.evidence.find(riskfactor => riskfactor.id === id);
  //
  //     if (obj) {
  //       prevState.evidence.splice(prevState.evidence.indexOf(obj), 1);
  //       obj.choice_id = value;
  //     }
  //
  //     prevState.evidence.push({ id, choice_id: value, initial: true });
  //
  //
  //     return prevState;
  //   });
  // }

  // handleSymptomInput = (e) => {
  //   //this.setState({ text: e.target.value}); USE THIS WITH NON-AUTOCOMPLETE INPUT FIELD
  //   this.setState({ text: e.value });
  // }
  //
  // parseSymptoms = (e) => {
  //   e && e.preventDefault();
  //
  //   Axios
  //     .post('/api/getparsedsymptoms/', { text: this.state.text })
  //     .then(res => {
  //       const evidence = [];
  //       res.data.mentions && res.data.mentions.map((mention) => evidence.push({ id: mention.id, choice_id: mention.choice_id, initial: true }));
  //
  //       if (evidence.length > 0){
  //         this.setState({ evidence: this.state.evidence.concat(evidence) });
  //       }
  //       delete this.state['text'];
  //       this.props.updateAppState(this.state);
  //
  //     })
  //     .catch(err => console.log(err));
  // }

  render() {

    return (
      <div>

        {/* <PatientGender
          handleGenderRadio={this.handleGenderRadio}
        /> */}
        {/* <PatientAge
          handleAgeSlider={this.handleAgeSlider}
          value={this.state.age}
        /> */}

        {/* <PatientCountries
          handleCountrySelector={this.handleCountrySelector}
        /> */}
        {/* <RiskFactors
          handleRiskFactorRadio={this.handleRiskFactorRadio}
        /> */}
        {/* <PatientSymptoms
          handleSymptomInput={this.handleSymptomInput}
          parseSymptoms={this.parseSymptoms}/> */}
      </div>
    );
  }
}
export default Prescreener;
