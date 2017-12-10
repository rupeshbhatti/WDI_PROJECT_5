import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div>
      <h1>Welcome to Dr. Webbers surgery</h1>
      <button><Link to={'/prescreener'}>Begin</Link></button>
    </div>
  );
};

export default Home;
