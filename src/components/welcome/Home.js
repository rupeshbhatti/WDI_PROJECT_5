import React from 'react';

import '../../scss/home.scss';

const Home = ({switchVisibleComponent}) => {

  return (
    <div id="Home">
      <div className="share-buttons">
        <div className="fb-like" data-href="https://infinite-scrubland-67453.herokuapp.com/" data-layout="button_count" data-action="like" data-size="large" data-show-faces="true" data-share="true"></div>
      </div>
      <form>
        <div>
          <img src="/assets/DrWebberLogo.png" />
        </div>
        <div id="strapline">
          <label className="strap">The future of healthcare</label>
        </div>
        <button className="homebutton" onClick={switchVisibleComponent} value="PatientGender">Begin</button>
        <div className="arrow bounce"></div>
      </form>
    </div>
  );
};

export default Home;
