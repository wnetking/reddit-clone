import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import registerServiceWorker from './utils/registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <Routes />,
    document.getElementById('root')
);

registerServiceWorker();