const INITIAL_STATE = null;

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SELECT_PARK':
      return action.payload;

    default:
      return state;
  }
}
