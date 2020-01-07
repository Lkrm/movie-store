import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './style.sass';
import { LogIn, SignUp } from './components';

const Authorization = () => (
  <main className="page-wrapper">
    <Switch>
      <Route exact path="/" component={LogIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/log-in" component={LogIn} />
    </Switch>
  </main>
);

export default Authorization;
