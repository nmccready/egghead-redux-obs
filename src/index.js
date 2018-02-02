import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import createOurStore from './createOurStore';

ReactDOM.render(
  <Provider store={createOurStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
