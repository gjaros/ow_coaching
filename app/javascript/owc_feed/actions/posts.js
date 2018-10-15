import axios from 'axios-on-rails';

const loadPosts = (posts) => ({
  type: 'LOAD_POSTS',
  posts
});

const loadReviews = (reviews) => ({
  type: 'LOAD_REVIEWS',
  reviews
});

const loadTips = (tips) => ({
  type: 'LOAD_TIPS',
  tips
});

function getReviews(post_id) {
  return function(dispatch) {
    let reviews = [];
    return axios.get('/reviews.json', {
      params: { post_id }
    })
    .then((response) => {
      response.data.map((review) => {
        axios.get('/tips.json', {
          params: { review_id: review.id }
        })
        .then((response) => {
          reviews.push({
            ...review,
            tips: response.data
          })
        })
      })

    })
    .then(() => { dispatch(loadReviews(reviews)) })
  }
}

// let reviews = [];
// response.data.map((review) => {
//   axios.get('/tips.json', {
//     params: { review_id: review.id }
//   })
//   .then((response) => {
//     reviews.push({
//       ...review,
//       tips: response.data
//     })
//   })
// })

export { loadPosts, loadReviews, loadTips, getReviews }
