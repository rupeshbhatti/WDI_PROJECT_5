import React from 'react';
import Slider from 'react-rangeslider';

import '../../scss/patientAge.scss';

const PatientAge = ({ handleAgeSlider, value, switchVisibleComponent }) => {

  return(
    <div className='slider' id="PatientAge">
      <div className="questionnaire">
        <form>
          <h1>Select your age</h1>
          <div className="content">
            <Slider
              min={0}
              max={100}
              value={value}
              onChange={handleAgeSlider}
            />
            <div className='value'>{value}</div>
            <br />
          </div>
          <hr />
          <button className="agebutton" onClick={switchVisibleComponent} value="PatientGender">Back</button>
          <button className="agebutton" onClick={switchVisibleComponent} value="PatientCountries">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default PatientAge;
