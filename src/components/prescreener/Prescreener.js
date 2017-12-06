import React from 'react';
import { Link } from 'react-router-dom';

import PatientGender from './PatientGender';
import PatientAge from './PatientAge';

class Prescreener extends React.Component {
  state = {
    user: {
    }
  }

  handleGenderRadio = (e) => {
    this.setState({ user: { sex: e.target.value } });
  }

  handleAgeSlider = (e) => {
    this.setState({ user: { age: e.target.value }});
  }

  render() {

    return (
      <div>
        <PatientGender handleGenderRadio={this.handleGenderRadio} />
        <PatientAge handleAgeSlider={this.handleAgeSlider}/>
      </div>
    );
  }
}
export default Prescreener;
