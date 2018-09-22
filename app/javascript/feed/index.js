import React from 'react';
import ReactDOM from 'react-dom';
import Feed from './components/Feed';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import postsReducer from './reducers/postsReducer';
import { posts, hidden } from './constants/seeds';

let state = posts.map((post) => (
  {
    ...post,
    hidden: true
  }
));

const store = createStore(postsReducer, state);

ReactDOM.render(
  <Provider store={store}>
    <Feed posts={posts}/>
  </Provider>,
  document.querySelector('#feed')
);
