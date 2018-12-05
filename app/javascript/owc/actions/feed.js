export const loadPosts = (posts) => ({
  type: 'LOAD_POSTS',
  posts
})

export const selectPost = (post) => ({
  type: 'SELECT_POST',
  post
})

export const loadReview = (review) => ({
  type: 'CREATE_REVIEW',
  review
})

export const editReview = (review) => ({
  type: 'UPDATE_REVIEW',
  review
})

export const deleteReview = (review) => ({
  type: 'DESTROY_REVIEW',
  review
})
