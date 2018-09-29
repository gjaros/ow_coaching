import { reviewsState } from '../constants/initialState'

let newState = [];

export default (state = reviewsState, action) => {
  newState = [];
  switch(action.type) {
    default:
      return state;
  }
}
