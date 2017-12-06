import React from 'react';

const PatientGender = ({ handleGenderRadio }) => {

  return(
    <div>
      <form>
        <h2>Select your gender</h2>
        <input type="radio" name="sex" value="male" onChange={handleGenderRadio} required/> Male<br />
        <input type="radio" name="sex" value="female" onChange={handleGenderRadio} required/> Female<br />
      </form>
      <hr />
    </div>
  );
};

export default PatientGender;
