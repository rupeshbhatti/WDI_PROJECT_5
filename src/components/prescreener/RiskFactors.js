import React from 'react';

import '../../scss/riskFactors.scss';

const RiskFactors = ({ handleRiskFactorRadio, switchVisibleComponent }) => {

  return (
    <div id="RiskFactors">
      <div className="questionnaire">
        <form>
          <h1>Select the appropriate options below</h1>
          <div className="questionContent">
            <div className="questionContainer">
              <h2>I am overweight</h2>
              <input type="radio" name="obese" id="p_7" value="present" onChange={ handleRiskFactorRadio } required/>
              <label>Yes</label><br />
              <input type="radio" name="obese" id="p_7" value="absent" onChange={ handleRiskFactorRadio } required/>
              <label>No</label><br />
              <input type="radio" name="obese" id="p_7" value="unknown" onChange={ handleRiskFactorRadio } required />
              <label>Unsure</label><br />
            </div>
            <div className="questionContainer">
              <h2>I smoke cigarettes</h2>
              <input type="radio" name="smoker" id="p_28" value="present" onChange={ handleRiskFactorRadio } required/>
              <label>Yes</label><br />
              <input type="radio" name="smoker" id="p_28" value="absent" onChange={ handleRiskFactorRadio } required/>
              <label>No</label><br />
              <input type="radio" name="smoker" id="p_28" value="unknown" onChange={ handleRiskFactorRadio } required/>
              <label>Unsure</label><br />
            </div>
            <div className="questionContainer">
              <h2>I have cholesterol</h2>
              <input type="radio" name="cholesterol" id="p_10" value="present" onChange={ handleRiskFactorRadio } required/>
              <label>Yes</label><br />
              <input type="radio" name="cholesterol" id="p_10" value="absent" onChange={ handleRiskFactorRadio } required/>
              <label>No</label><br />
              <input type="radio" name="cholesterol" id="p_10" value="unknown" onChange={ handleRiskFactorRadio } required/>
              <label>Unsure</label><br />
            </div>
            <div className="questionContainer">
              <h2>I have hypertension</h2>
              <input type="radio" name="hypertension" id="p_9" value="present" onChange={ handleRiskFactorRadio } required/>
              <label>Yes</label><br />
              <input type="radio" name="hypertension" id="p_9" value="absent" onChange={ handleRiskFactorRadio } required/>
              <label>No</label><br />
              <input type="radio" name="hypertension" id="p_9" value="unknown" onChange={ handleRiskFactorRadio } required/>
              <label>Unsure</label><br />
            </div>
            <div className="questionContainer">
              <h2>I am diabetic</h2>
              <input type="radio" name="diabetic" id="p_8" value="present" onChange={ handleRiskFactorRadio } required/>
              <label>Yes</label><br />
              <input type="radio" name="diabetic" id="p_8" value="absent" onChange={ handleRiskFactorRadio } required/>
              <label>No</label><br />
              <input type="radio" name="diabetic" id="p_8" value="unknown" onChange={ handleRiskFactorRadio } required/>
              <label>Unsure</label><br />
            </div>
            <br />
          </div>
          <hr />
          <button className="riskfactorsbutton" onClick={switchVisibleComponent} value="PatientSymptoms">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default RiskFactors;
