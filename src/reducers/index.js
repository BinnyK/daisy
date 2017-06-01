import { combineReducers } from 'redux';
import flowersReducer from './flowersReducer';
import filterReducer from './filterReducer';
// import filteredFlowersReducer from './filteredFlowersReducer';

const rootReducer = combineReducers({
  flowers: flowersReducer,
  filter: filterReducer
  // filteredFlowers: filteredFlowersReducer
})

export default rootReducer;
