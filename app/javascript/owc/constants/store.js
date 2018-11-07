import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import feedReducer from '../reducers/feedReducer';
import timestampReducer from '../reducers/timestampReducer';

const ow_coach = combineReducers({
  feedReducer,
  timestampReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  ow_coach, composeEnhancers(
    applyMiddleware(thunk)
  )
);
