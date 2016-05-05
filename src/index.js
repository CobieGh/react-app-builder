import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App';
import Preview from './Preview';
import './styles/index.scss';

injectTapEventPlugin();

ReactDOM.render(
  (<Router history={browserHistory}>
    <Route path='/(react-app-builder)' component={App}>
      <IndexRoute component={Preview} />
    </Route>
  </Router>),
  document.getElementById('app')
);
