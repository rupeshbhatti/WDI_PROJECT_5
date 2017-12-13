import React from 'react';
import Icon from 'react-icons-kit';
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
              <input type="radio" name="sex" value="male" onChange={handleGenderRadio} required /><Icon id="male" icon={man} size={128} />
              <input type="radio" name="sex" value="female" onChange={handleGenderRadio} required /><Icon id="female" icon={woman} size={128} />
              <br />
            </div>
          </div>
          <hr />
          <button className="genderbutton" onClick={switchVisibleComponent} value="PatientAge">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default PatientGender;
