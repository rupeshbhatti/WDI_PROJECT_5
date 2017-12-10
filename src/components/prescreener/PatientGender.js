import React from 'react';
import Icon from 'react-icons-kit';
import { man, woman } from 'react-icons-kit/icomoon';

const PatientGender = ({ handleGenderRadio }) => {

  return(
    <div>
      <form>
        <h2>Select your gender</h2>
        <input type="radio" name="sex" value="male" onChange={handleGenderRadio} required/><Icon id="male" icon={man} size={64} />
        <input type="radio" name="sex" value="female" onChange={handleGenderRadio} required/><Icon id="female" icon={woman} size={64} />
      </form>
      <hr />
    </div>
  );
};

export default PatientGender;
