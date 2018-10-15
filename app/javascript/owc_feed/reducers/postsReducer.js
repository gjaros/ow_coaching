// import axios from 'axios-on-rails';
//
// export default (state = { posts: [], reviews: [], isFetching: false }, action) => {
//   switch(action.type) {
//     case 'LOAD_POSTS':
//       return {
//         ...state,
//         posts: state.posts.concat(action.posts)
//       };
//     case 'REQUEST_REVIEWS':
//       return {
//         ...state,
//         isFetching: true
//       };
//     case 'RECIEVE_REVIEWS':
//       return {
//         ...state,
//         isFetching: false,
//         reviews: action.reviews
//       }
//     default:
//       return state;
//   }
// }

import { LOAD_POSTS, SELECT_POST, REQUEST_REVIEWS, RECIEVE_REVIEWS } from '../actions/posts'
import { combineReducers } from 'redux'

function posts(state = [], action) {
  switch (action.type) {
    case LOAD_POSTS:
      return state.concat(action.posts)
    default:
      return state
  }
}

function selectedPost(state = 0, action) {
  switch (action.type) {
    case SELECT_POST:
      return action.post_id
    default:
      return state
  }
}

function reviews(state = { isFetching: false, items: [] }, action) {
  switch (action.type) {
    case REQUEST_REVIEWS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECIEVE_REVIEWS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.reviews,
        lastUpdated: action.recievedAt
      })
    default:
      return state
  }
}

function reviewsFromID(state = {}, action) {
  switch (action.type) {
    case RECIEVE_REVIEWS:
    case REQUEST_REVIEWS:
      return Object.assign({}, state, {
        [action.post_id]: reviews(state[action.post_id], action)
      })
    default:
      return state
  }
}

export default combineReducers({
  posts,
  selectedPost,
  reviewsFromID
})
