import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'react-icons-kit';
import { man, woman } from 'react-icons-kit/icomoon';

const PatientGender = ({ handleGenderRadio, switchVisibleComponent }) => {

  return(
    <div>
      <form>
        <h2>Select your gender</h2>
        <input type="radio" name="sex" value="male" onChange={handleGenderRadio} required/><Icon id="male" icon={man} size={128} />
        <input type="radio" name="sex" value="female" onChange={handleGenderRadio} required/><Icon id="female" icon={woman} size={128} />
        <br />
        <button onClick={switchVisibleComponent} value="PatientAge">Continue</button>
      </form>
      <hr />
    </div>
  );
};

export default PatientGender;
