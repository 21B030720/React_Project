// Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Sounds from './components/Sounds';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/sounds" component={Sounds} />
      </Switch>
    </Router>
  );
}

export default Routes;
