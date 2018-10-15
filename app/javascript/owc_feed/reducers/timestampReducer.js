export default (state = 0, action) => {
  let newState = [];
  switch(action.type) {
    case 'CHANGE_TIME':
      return action.newTime;
      break;
    default:
      return state;
  }
}
