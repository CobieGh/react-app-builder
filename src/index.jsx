import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app.jsx';
import Preview from './preview.jsx';

ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Preview} />
    </Route>
  </Router>),
  document.getElementById('app')
);
