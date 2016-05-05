import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';
import Preview from './Preview';
import './styles/index.scss';

injectTapEventPlugin();

ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Preview} />
    </Route>
  </Router>),
  document.getElementById('app')
);
