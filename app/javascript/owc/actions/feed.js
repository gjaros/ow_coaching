export const loadPosts = (posts) => ({
  type: 'LOAD_POSTS',
  posts
})

export const selectPost = (post) => ({
  type: 'SELECT_POST',
  post
})

export const createReview = () => ({
  type: 'CREATE_REVIEW'
})

export const changeReview = (review) => ({
  type: 'CHANGE_REVIEW',
  review
})

export const addTip = (timestamp) => ({
  type: 'ADD_TIP',
  timestamp
})

export const changeTitle = (title) => ({
  type: 'CHANGE_TITLE',
  title
})

export const changeSummary = (summary) => ({
  type: 'CHANGE_SUMMARY',
  summary
})

export const loadReview = (review) => ({
  type: 'LOAD_REVIEW',
  review
})

export const editReview = (review) => ({
  type: 'EDIT_REVIEW',
  review
})
