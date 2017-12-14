import React from 'react';
import Icon  from 'react-icons-kit';
import { man, woman } from 'react-icons-kit/icomoon';

import '../../scss/patientGender.scss';

const PatientGender = ({ handleGenderRadio, switchVisibleComponent }) => {

  return(
    <div id="PatientGender">
      <div className="questionnaire">
        <form>
          <h1>Select your gender</h1>
          <div className="content">
            <div id="icons">
              <input id="male" type="radio" name="sex" value="male" onChange={handleGenderRadio} required />
              <label htmlFor="male"><Icon id="male" icon={man} size={128} /></label>
              <input id="female" type="radio" name="sex" value="female" onChange={handleGenderRadio} required />
              <label htmlFor="female"><Icon id="female" icon={woman} size={128} /></label>
              <br />
            </div>
          </div>
          <hr />
          <button className="genderbutton" onClick={switchVisibleComponent} value="Home">Back</button>
          <button className="genderbutton" onClick={switchVisibleComponent} value="PatientAge">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default PatientGender;
