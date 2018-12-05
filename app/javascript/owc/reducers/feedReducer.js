const node = document.getElementById('owc_feed_payload')
const numberOfPosts = JSON.parse(node.getAttribute('number_of_posts'))
const userProfile = JSON.parse(node.getAttribute('user_profile'))

const user = {
  info: {},
  profile: (userProfile ? userProfile : null),
  isLoggedIn: function() { return this.profile ? true : false }
}

const initialState = {
  page: 0,
  hasMoreItems: true,
  user,
  posts: [],
  selectedPost: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_POSTS':
      return {
        ...state,
        hasMoreItems: state.posts.length < numberOfPosts ? true : false,
        page: state.page + 1,
        posts: state.posts.concat(action.posts)
      }
      break
    case 'SELECT_POST':
      return {
        ...state,
        selectedPost: state.posts.filter(post => post.id === action.post)[0]
      }
      break
    case 'CREATE_REVIEW':
      return {
        ...state,
        posts: state.posts.map(post => post.id === action.review.post_id ?
          { ...post, reviews: post.reviews.concat(action.review) } : { ...post }
        )
      }
      break
    case 'UPDATE_REVIEW':
      return {
        ...state,
        posts: state.posts.map(post => post.id === action.review.post_id ?
          { ...post, reviews: post.reviews.filter(review => review.id != action.review.id).concat(action.review) } : { ...post }
        )
      }
      break
    case 'DESTROY_REVIEW':
      return {
        ...state,
        posts: state.posts.map(post => post.id === action.review.post_id ?
          { ...post, reviews: post.reviews.filter(review => review.id != action.review.id) } : { ...post }
        )
      }
      break
    default:
      return state
  }
}
