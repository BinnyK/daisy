function filterList(state = [], action) {
  switch (action.type) {
    case 'TOGGLE_FILTER':
      if (!state.includes(action.month)) {
        console.log("ADDING FILTER");
        return [...state, action.month];

      } else if (state.includes(action.month)) {
        console.log("Removing FILTER");
        
        const newState = state;
        return newState.filter((month) => {
          return month !== action.month
        })
      } else {
        return state;
      }

    default:
      console.log("DEFAULT from filterReducer");
      return state;
  }
}

export default filterList;
