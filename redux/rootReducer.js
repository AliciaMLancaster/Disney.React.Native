import { combineReducers } from 'redux';
import selectedParkReducer from './selectedParkReducer';

const rootReducer = combineReducers({
  selectedPark: selectedParkReducer
});

export default rootReducer;
