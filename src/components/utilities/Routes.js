import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router';

// import Login    from '../auth/Login';
// import Register from '../auth/Register';
//
// import HitsIndex from '../hits/HitsIndex';
// import HitsShow  from  '../hits/HitsShow';
// // import HitsNew   from '../hits/HitsNew';
// import HitsEdit  from '../hits/HitsEdit';
//
// import ProtectedRoute from './ProtectedRoute';
import Home from '../welcome/Home';
import Prescreener from '../prescreener/Prescreener';
import Interview from '../interview/Interview';
import DisplayCondition from '../interview/DisplayCondition';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/prescreener" component={Prescreener} />
      <Route exact path="/interview" component={Interview} />
      <Route exact path="/condition" component={DisplayCondition} /> 
    </Switch>
  );
};

export default withRouter(Routes);
