// import { FILTER_FLOWERS } from '../actions';
import INIT_FLOWER_STATE from '../flowers';

function flowers(state = INIT_FLOWER_STATE, action) {
  switch (action.type) {
    case 'ADD_FLOWER':
      console.log("ADDING FLOWER");
      return state;
    default:
      console.log("DEFAULT from flowersReducer");
      return state;
  }
}

export default flowers;
