const initialState = [];
let newState = [];

export default (state = initialState, action) => {
  newState = [];
  switch(action.type) {
    case 'TOGGLE_HIDDEN':
      console.log(state.hidden);
      return newState;
      break;
    default:
      return state;
  }
}