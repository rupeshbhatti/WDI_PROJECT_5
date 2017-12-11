import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({switchVisibleComponent}) => {

  return (
    <div id="HomeLogo">
      <form>
        <img src="/assets/DrWebberLogo.png" />
        {/* <div className="arrow bounce"></div> */}
        <button onClick={switchVisibleComponent} value="PatientGender">Continue</button>
      </form>
      {/* <img src="/assets/DrWebberLogo.png"/> */}
      {/* <button><Link to={'/prescreener'}>Begin</Link></button> */}
    </div>
  );
};

export default Home;
