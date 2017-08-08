import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './containers/App';
import App from './containers/';

const Routes = (props) => (
  <Router>
    <Route path="/" component={App} />
    <Route path="/" component={Posts} />
  </Router>
);

export default Routes;