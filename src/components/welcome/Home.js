import React from 'react';

import '../../scss/home.scss';

const Home = ({switchVisibleComponent}) => {

  return (
    <div id="home">
      <form>
        <img src="/assets/DrWebberLogo.png" />
        <div id="strapline">
          <label className="strap">The future of healthcare is here.</label>
        </div>
        <button className="homebutton" onClick={switchVisibleComponent} value="PatientGender">Begin</button>
        <div className="arrow bounce"></div>
      </form>
    </div>
  );
};

export default Home;
