import { LOAD_POSTS } from '../actions/posts'

export default (state = [], action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return state.concat(action.posts)
    default:
      return state
  }
}
