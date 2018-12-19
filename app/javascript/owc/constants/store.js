import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import feedReducer from '../reducers/feedReducer'
import playerReducer from '../reducers/playerReducer'
import feedSaga from '../sagas/feedSaga'

const ow_coach = combineReducers({
  feedReducer,
  playerReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()

export default createStore(
  ow_coach, composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(feedSaga)
