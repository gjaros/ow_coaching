export const loadPosts = (posts) => ({
  type: 'LOAD_POSTS',
  posts
})

export const selectPost = (post) => ({
  type: 'SELECT_POST',
  post
})

//actions which trigger sagas sending create/update requests.
export const newReview = (review) => ({
  type: 'CREATE_REVIEW',
  review
})
export const editReview = (review) => ({
  type: 'UPDATE_REVIEW',
  review
})

//actions which post/patch client state.
export const postReview = (payload) => ({
  type: 'POST_REVIEW',
  payload
})

export const patchReview = (payload) => ({
  type: 'PATCH_REVIEW',
  payload
})

export const deleteReview = (review) => ({
  type: 'DESTROY_REVIEW',
  review
})
