let newState = [];

export default (state = 0, action) => {
  newState = [];
  switch(action.type) {
    case 'CHANGE_TIME':
      return action.newTime;
      break;
    default:
      return state;
  }
}
