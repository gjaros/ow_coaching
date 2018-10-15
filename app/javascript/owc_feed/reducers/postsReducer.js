export default (state = { posts: [], reviews: [] }, action) => {
  switch(action.type) {
    case 'LOAD_POSTS':
      return {
        ...state,
        posts: state.posts.concat(action.posts)
      };
    case 'LOAD_REVIEWS':
      // console.log({
      //   ...state,
      //   reviews: reviews
      // });
      return {
        ...state,
        reviews: action.reviews
      };
    default:
      return state;
  }
}
