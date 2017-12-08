import React from 'react';

const Interview = ({ questionAndAnswers }) => {
  console.log(questionAndAnswers);
  return(
    <form>
      <h2>{ questionAndAnswers['0'].question }</h2>

      { questionAndAnswers['0'].choices.map((mainchoice,i) =>
        <div key={i}>
          <h3 >{ mainchoice.name }</h3>
          { mainchoice.choices.map((choice, j) => {
            return <div key={j}><input type="radio" name={mainchoice.id} id={mainchoice.id} value={choice.id}  required/><label htmlFor={mainchoice.id}>{choice.label}</label></div>;

          }) }
        </div>
      )}
      <input type="submit" value="Confirm" />
    </form>
  );
};

export default Interview;
