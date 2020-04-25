export const selectPark = (park) => {
  return {
    type: 'SELECT_PARK',
    payload: park
  };
};
