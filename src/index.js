import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import Routes from './routes';
import registerServiceWorker from './utils/registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';

import configureStore from './store'
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();