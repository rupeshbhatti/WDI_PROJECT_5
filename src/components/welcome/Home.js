import React from 'react';

import '../../scss/home.scss';

const Home = ({switchVisibleComponent}) => {

  return (
    <div id="home">
      <form>
        <img src="/assets/DrWebberLogo.png" />
        <button className="homebutton" onClick={switchVisibleComponent} value="PatientGender">Begin</button>
        <div className="arrow bounce"></div>
      </form>
    </div>
  );
};

export default Home;
