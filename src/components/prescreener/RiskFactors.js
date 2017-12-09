import React from 'react';

const RiskFactors = ({ handleRiskFactorRadio }) => {

  return (
    <div>
      <h2>Select the appropriate options below</h2>
      <form>
        <h3>I am overweight</h3>
        <input type="radio" name="obese" id="p_7" value="present" onChange={ handleRiskFactorRadio } required/> Yes<br />
        <input type="radio" name="obese" id="p_7" value="absent" onChange={ handleRiskFactorRadio } required/> No<br />
        <input type="radio" name="obese" id="p_7" value="unknown" onChange={ handleRiskFactorRadio } required /> Unsure<br />
        <h3>I smoke cigarettes</h3>
        <input type="radio" name="smoker" id="p_28" value="present" onChange={ handleRiskFactorRadio } required/> Yes<br />
        <input type="radio" name="smoker" id="p_28" value="absent" onChange={ handleRiskFactorRadio } required/> No<br />
        <input type="radio" name="smoker" id="p_28" value="unknown" onChange={ handleRiskFactorRadio } required/> Unsure<br />
        <h3>I have cholesterol</h3>
        <input type="radio" name="cholesterol" id="p_10" value="present" onChange={ handleRiskFactorRadio } required/> Yes<br />
        <input type="radio" name="cholesterol" id="p_10" value="absent" onChange={ handleRiskFactorRadio } required/> No<br />
        <input type="radio" name="cholesterol" id="p_10" value="unknown" onChange={ handleRiskFactorRadio } required/> Unsure<br />
        <h3>I have hypertension</h3>
        <input type="radio" name="hypertension" id="p_9" value="present" onChange={ handleRiskFactorRadio } required/> Yes<br />
        <input type="radio" name="hypertension" id="p_9" value="absent" onChange={ handleRiskFactorRadio } required/> No<br />
        <input type="radio" name="hypertension" id="p_9" value="unknown" onChange={ handleRiskFactorRadio } required/> Unsure<br />
        <h3>I am diabetic</h3>
        <input type="radio" name="diabetic" id="p_8" value="present" onChange={ handleRiskFactorRadio } required/> Yes<br />
        <input type="radio" name="diabetic" id="p_8" value="absent" onChange={ handleRiskFactorRadio } required/> No<br />
        <input type="radio" name="diabetic" id="p_8" value="unknown" onChange={ handleRiskFactorRadio } required/> Unsure<br />
      </form>
      <hr />
    </div>
  );
};

export default RiskFactors;
