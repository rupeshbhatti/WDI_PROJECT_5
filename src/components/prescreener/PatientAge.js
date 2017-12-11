import React from 'react';
import Slider from 'react-rangeslider';
import { Link } from 'react-router-dom';

const PatientAge = ({ handleAgeSlider, value, switchVisibleComponent }) => {

  return(
    <div className='slider'>
      <form>
        <h2>Select your age</h2>
        <Slider
          min={0}
          max={100}
          value={value}
          onChange={handleAgeSlider}
        />
        <div className='value'>{value}</div>
        <br />
        <button onClick={switchVisibleComponent} value="PatientCountries">Continue</button>
      </form>
      <hr />
    </div>
  );
};

export default PatientAge;
