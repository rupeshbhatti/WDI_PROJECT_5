import React from 'react';

const Home = ({switchVisibleComponent}) => {

  return (
    <div id="HomeLogo">
      <form>
        <img src="/assets/DrWebberLogo.png" />
        <button onClick={switchVisibleComponent} value="PatientGender">Continue</button>
        <div onClick={switchVisibleComponent} value="PatientGender" className="arrow bounce"></div> 
      </form>
    </div>
  );
};

export default Home;
