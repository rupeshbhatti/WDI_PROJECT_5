import React from 'react';
import { Link } from 'react-router-dom';

import PatientGender from './PatientGender';
import PatientAge from './PatientAge';
import PatientCountries from './PatientCountries';

class Prescreener extends React.Component {
  state = {
    user: {
      age: 30
    },
    evidence: []
  }

  handleGenderRadio = (e) => {
    this.setState({ user: { sex: e.target.value } });
  }

  handleAgeSlider = (e) => {
    this.setState({ user: { age: e }});
  }

  handleCountrySelector = (e) => {
    const selectedCountries = this.state.evidence;

    // if selected country isn't already in the array, then add
    if (!selectedCountries.find(country => country.id === e.target.value)){
      selectedCountries.push({ id: e.target.value, choice_id: 'present'});
      this.setState({ evidence: selectedCountries });
    } else {
      // else remove the country i.e. toggle select
      const filteredCountries = selectedCountries.filter(country => {
        return country.id !== e.target.value;
      });
      this.setState({ evidence: filteredCountries });
    }


  }

  render() {

    return (
      <div>
        <PatientGender handleGenderRadio={this.handleGenderRadio} />
        <PatientAge
          handleAgeSlider={this.handleAgeSlider}
          value={this.state.user.age}
        />
        <PatientCountries
          handleCountrySelector={this.handleCountrySelector}
        />
      </div>
    );
  }
}
export default Prescreener;
