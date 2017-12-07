import React from 'react';
import Slider from 'react-rangeslider';

const PatientAge = ({ handleAgeSlider, value }) => {
  
  return(
    <div className='slider'>
      <h2>Select your age</h2>
      <Slider
        min={0}
        max={100}
        value={value}
        onChange={handleAgeSlider}
      />
      <div className='value'>{value}</div>
    </div>
  );
};

export default PatientAge;
