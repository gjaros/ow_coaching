import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Feed from './components/Feed';
import store from './constants/store';

ReactDOM.render(
  <Provider store={store}>
    <Feed />
  </Provider>,
  document.querySelector('#owc_feed')
);
