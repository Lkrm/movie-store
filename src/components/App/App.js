import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Authorization from '../../pages';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Authorization} />
    </Switch>
  </BrowserRouter>
);

export default App;
