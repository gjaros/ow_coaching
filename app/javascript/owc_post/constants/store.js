import { createStore, combineReducers } from 'redux';
import reviewsReducer from '../reducers/reviewsReducer';
import timestampReducer from '../reducers/timestampReducer';

const ow_coach = combineReducers({
  reviewsReducer,
  timestampReducer
});

export default createStore(ow_coach, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
