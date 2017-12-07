import React from 'react';

const PatientSymptoms = ({handleSymptomInput, parseSymptoms }) => {

  return(
    <div>
      <h2>Enter your symptoms below</h2>
      <form onSubmit={parseSymptoms}>
        <input type="text" name="symptoms" onChange={handleSymptomInput} />
        <input type="submit" value="Continue to Diagnosis" maxLength="1024"/>
      </form>
      <hr />
    </div>
  );
};

export default PatientSymptoms;
