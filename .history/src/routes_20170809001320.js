import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './containers/App';
import Posts from './containers/Posts';

class Routes extends component (props) => (
  <Router>
    <Route path="/" render={( <App />)} />
      <Route path="/posts" component={Posts} />
  </Router>
);

export default Routes;