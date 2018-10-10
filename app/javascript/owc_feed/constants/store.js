import { createStore, combineReducers } from 'redux';
import postsReducer from '../reducers/postsReducer';
import timestampReducer from '../reducers/timestampReducer';

const ow_coach = combineReducers({
  postsReducer,
  timestampReducer
});

export default createStore(ow_coach, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
