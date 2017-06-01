
function search(state = '', action) {
  switch (action.type) {
    case 'UPDATE_SEARCH':
      console.log("updating search");
      return [...state, action.search];
    default:
      console.log("SEARCH REDUCER");
      return state;
  }

}

export default search;
