const initialState = {
  timestamp: 0,
  seekTo: 0
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'CHANGE_TIME':
      return {
        ...state,
        timestamp: Math.floor(action.newTime)
      }
      break;
    case 'SEEK_TO_TIMESTAMP':
      return {
        ...state,
        seekTo: action.newTime
      }
      break
    default:
      return state;
  }
}
