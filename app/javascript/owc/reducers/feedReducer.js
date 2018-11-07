const node = document.getElementById('owc_feed_payload')
const numberOfPosts = JSON.parse(node.getAttribute('number_of_posts'))
const userProfile = JSON.parse(node.getAttribute('user_profile'))

const user = {
  info: {},
  profile: (userProfile ? userProfile : null),
  isLoggedIn: function() { return this.profile ? true : false }
}

const initialState = {
  numberOfPosts,
  page: 0,
  hasMoreItems: true,
  user,
  posts: [],
  review: user.isLoggedIn() && {
    profile_id: user.profile.id,
    summary: '',
    title: '',
    tips: []
  },
  selectedPost: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_POSTS':
      return {
        ...state,
        hasMoreItems: state.posts.length < state.numberOfPosts ? true : false,
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
        review: {
          ...state.review,
          post_id: state.selectedPost.id
        }
      }
      break
    case 'CHANGE_REVIEW':
      return {
        ...state,
        review: {
          ...state.review,
          id: action.review.id,
          post_id: state.selectedPost.id,
          summary: action.review.summary,
          title: action.review.title,
          tips: action.review.tips
        }
      }
      break
    case 'ADD_TIP':
      return {
        ...state,
        review: {
          ...state.review,
          tips: state.review.tips.concat({
            timestamp: action.timestamp,
            comment: '',
            tags: []
          })
        }
      }
      break
    case 'CHANGE_TITLE':
      return {
        ...state,
        review: {
          ...state.review,
          title: action.title
        }
      }
      break
    case 'CHANGE_SUMMARY':
      return {
        ...state,
        review: {
          ...state.review,
          summary: action.summary
        }
      }
      break
    case 'LOAD_REVIEW':
      return {
        ...state,
        posts: state.posts.map(post => post.id === action.review.post_id ?
          { ...post, reviews: post.reviews.concat(action.review)} : { ...post }
        )
      }
      break
    case 'EDIT_REVIEW':
      return {
        ...state,
        posts: state.posts.map(post => post.id === action.review.post_id ?
          { ...post, reviews: post.reviews.filter(review => review.id != action.review.id).concat(action.review)} : { ...post }
        )
      }
      break
    default:
      return state
  }
}
