import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import store from './constants/store'

import Feed from './components/Feed'
import CreateReview from './components/CreateReview'
import EditReview from './components/EditReview'
import NotFoundPage from './components/NotFoundPage'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/' component={Feed} exact={true} />
        <Route path='/createReview' component={CreateReview} />
        <Route path='/editReview' component={EditReview} />
        // NotFoundPage not working
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </Provider>,
  document.querySelector('#owc')
)
