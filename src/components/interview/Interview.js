import React from 'react';

import '../../scss/interview.scss';

const Interview = ({ questionAndAnswers, radioHandler, continueInterview }) => {
  const index = questionAndAnswers.length - 1;

  return(
    <div id="Interview">
      { questionAndAnswers.length > 0 &&
        <div className="questionnaire">
          <form onSubmit={continueInterview}>
            <h1>Consultation</h1>
            <div className="questionContent">
              <h1>{ questionAndAnswers[index].question }</h1>

              { questionAndAnswers[index].choices.map((mainchoice,i) =>
                <div key={i}>
                  <h2 >{ mainchoice.name }</h2>
                  { mainchoice.choices.map((choice, j) => {
                    return <div key={j}><input type="radio" name={mainchoice.id} id={mainchoice.id} value={choice.id} onChange={radioHandler} required/><label htmlFor={mainchoice.id}>{choice.label}</label></div>;
                  }) }
                </div>
              )}
              <hr />
              {/* <input type="submit" value="Continue" /> */}
              <button className="interviewbutton">Continue</button>
            </div>
          </form>
        </div>
      }
    </div>
  );
};

export default Interview;
