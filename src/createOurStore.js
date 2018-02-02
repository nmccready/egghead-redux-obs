import { createStore, applyMiddleware, compose } from 'redux';
import { ajax } from 'rxjs/observable/dom/ajax';
import { createEpicMiddleware } from 'redux-observable';

import './index.css';
import rootEpic from './epics/index';
import reducer from './reducers';

export default function createOurStore(deps = {}) {
  const epicMiddleware = createEpicMiddleware(rootEpic, {
    dependencies: {
      ajax,
      ...deps
    }
  });

  const composeEnhancers = // eslint-disable-next-line
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    reducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  );
}
