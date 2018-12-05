import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import feedReducer from '../reducers/feedReducer'
import playerReducer from '../reducers/playerReducer'

const ow_coach = combineReducers({
  feedReducer,
  playerReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  ow_coach, composeEnhancers(
    applyMiddleware(thunk)
  )
)
