import { posts } from '../constants/initialState';
import axios from 'axios-on-rails';

export default (state = [], action) => {
  switch(action.type) {
    case 'LOAD_POSTS':
      return state.concat(action.posts)
    default:
      return state;
  }
}
