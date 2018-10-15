import axios from 'axios-on-rails';

export const LOAD_POSTS = 'LOAD_POSTS'
export const SELECT_POST = 'SELECT_POST'
export const REQUEST_REVIEWS = 'REQUEST_REVIEWS'
export const RECIEVE_REVIEWS = 'RECIEVE_REVIEWS'

export function loadPosts(posts) {
  return {
    type: LOAD_POSTS,
    posts
  }
}

export function selectPost(post_id) {
  return {
    type: SELECT_POST,
    post_id
  }
}

export function requestReviews(post_id) {
  return {
    type: REQUEST_REVIEWS,
    reviews
  }
}

export function recieveReviews(post_id, json) {
  return {
    type: RECIEVE_REVIEWS,
    post_id,
    reviews: json.data.children.map(child => child.data),
    recievedAt: Data.now()
  }
}

const fetchReviews = post_id => dispatch => {
  dispatch(requestReviews(post_id))
  return axios.get('/reviews.json', {
    params: { post_id }
  })
    .then(response => response.json())
    .then(json => dispatch(recieveReviews(post_id, json)))
}

const shouldFetchReviews = (state, post_id) => {
  const reviews = state.reviewsFromID[post_id]
  if (!reviews) {
    return true
  }
  if (reviews.isFetching) {
    return false
  }
}

export const fetchReviewsIfNeeded = post_id => (dispatch, getState) => {
  if (shouldFetchReviews(getState(), post_id)) {
    return dispatch(fetchReviews(post_id))
  }
}


// let reviews = [];
// return axios.get('/reviews.json', {
//   params: { post_id }
// })
// .then((response) => {
//   response.data.map((review) => {
//     axios.get('/tips.json', {
//       params: { review_id: review.id }
//     })
//     .then((response) => {
//       reviews.push({
//         ...review,
//         tips: response.data
//       })
//     })
//   })
// })
// .then(() => { dispatch(loadReviews(reviews)) })
