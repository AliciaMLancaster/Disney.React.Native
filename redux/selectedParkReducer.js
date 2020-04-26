const INITIAL_STATE = null;

export default function (state = INITIAL_STATE, action) {
  console.log(action.payload);

  switch (action.type) {
    case 'SELECT_PARK':
      return action.payload;

    default:
      return state;
  }
}
