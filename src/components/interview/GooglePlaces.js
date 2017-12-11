import React from 'react';
// import ReactSelectGooglePlaces from 'react-google-places';

const GooglePlaces = () => {

  return(
    <div>
      <ReactSelectGooglePlaces
        apiKey="AIzaSyCtXSJtQC5Mu5Z-BO-g_aZOzi30lGJdL1Q"
        country="GBR"
      >Example</ReactSelectGooglePlaces>
    </div>
  );
};

export default GooglePlaces;
