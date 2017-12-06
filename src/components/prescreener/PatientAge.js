import React from 'react';
import Slider from 'react-rangeslider';

const PatientAge = ({ handleAgeSlider }) => {
  let value = 30;
  return(
    <div className='slider'>
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
