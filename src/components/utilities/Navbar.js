import React                from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = () => {

  return(
    <nav>
      <h1>Dr Webber</h1>
      <Link to="/prescreener">Begin</Link>
    </nav>
  );
};

export default withRouter(Navbar);
