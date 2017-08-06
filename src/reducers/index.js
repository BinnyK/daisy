import { combineReducers } from 'redux';
import flowersReducer from './flowersReducer';
import filterReducer from './filterReducer';
// import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  flowers: flowersReducer,
  filter: filterReducer
  // search: searchReducer
})

export default rootReducer;
