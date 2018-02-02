import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { ajax } from 'rxjs/observable/dom/ajax';
import { createEpicMiddleware } from 'redux-observable';

import './index.css';
import App from './App';
import rootEpic from './epics/index';
import reducer from './reducers';

const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: {
    ajax
  }
});

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
