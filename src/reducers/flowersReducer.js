// import { FILTER_FLOWERS } from '../actions';
import INIT_FLOWER_STATE from '../flowers';

function flowers(state = INIT_FLOWER_STATE, action) {
  console.log("DEFAULT from flowersReducer");
  return state;
}

export default flowers;
