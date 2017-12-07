import React from 'react';

const RiskFactors = ({ handleRiskFactorRadio }) => {

  return (
    <div>
      <h2>Select the appropriate options below</h2>
      <form>
        <h3>I am overweight</h3>
        <input type="radio" name="obese" value="p_7|present" onChange={ handleRiskFactorRadio } required/> Yes<br />
        <input type="radio" name="obese" value="p_7|absent" onChange={ handleRiskFactorRadio } required/> No<br />
        <input type="radio" name="obese" value="obese|unsure" onChange={ handleRiskFactorRadio } required /> Unsure<br />
        <h3>I smoke cigarettes</h3>
        <input type="radio" name="smoker" value="p_28|present" onChange={ handleRiskFactorRadio } required/> Yes<br />
        <input type="radio" name="smoker" value="p_28|absent" onChange={ handleRiskFactorRadio } required/> No<br />
        <input type="radio" name="smoker" value="smoker|unsure" onChange={ handleRiskFactorRadio } required/> Unsure<br />
        <h3>I have cholesterol</h3>
        <input type="radio" name="cholesterol" value="p_10|present" onChange={ handleRiskFactorRadio } required/> Yes<br />
        <input type="radio" name="cholesterol" value="p_10|absent" onChange={ handleRiskFactorRadio } required/> No<br />
        <input type="radio" name="cholesterol" value="cholesterol|unsure" onChange={ handleRiskFactorRadio } required/> Unsure<br />
        <h3>I have hypertension</h3>
        <input type="radio" name="hypertension" value="p_9|present" onChange={ handleRiskFactorRadio } required/> Yes<br />
        <input type="radio" name="hypertension" value="p_9|absent" onChange={ handleRiskFactorRadio } required/> No<br />
        <input type="radio" name="hypertension" value="hypertension|unsure" onChange={ handleRiskFactorRadio } required/> Unsure<br />
        <h3>I am diabetic</h3>
        <input type="radio" name="diabetic" value="p_8|present" onChange={ handleRiskFactorRadio } required/> Yes<br />
        <input type="radio" name="diabetic" value="p_8|absent" onChange={ handleRiskFactorRadio } required/> No<br />
        <input type="radio" name="diabetic" value="diabetic|unsure" onChange={ handleRiskFactorRadio } required/> Unsure<br />
      </form>
      <hr />
    </div>
  );
};

export default RiskFactors;
