import React from 'react';

const Interview = ({ questionAndAnswers, radioHandler, continueInterview }) => {
  console.log('questionAndAnswers in interview', questionAndAnswers);
  const index = questionAndAnswers.length - 1;

  return(
    <form onSubmit={continueInterview}>
      <h2>{ questionAndAnswers[index].question }</h2>

      { questionAndAnswers[index].choices.map((mainchoice,i) =>
        <div key={i}>
          <h3 >{ mainchoice.name }</h3>
          { mainchoice.choices.map((choice, j) => {
            return <div key={j}><input type="radio" name={mainchoice.id} id={mainchoice.id} value={choice.id} onChange={radioHandler}  required/><label htmlFor={mainchoice.id}>{choice.label}</label></div>;

          }) }
        </div>
      )}
      <input type="submit" value="Continue" />
    </form>
  );
};

export default Interview;
