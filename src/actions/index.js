export function toggleFilter(month) {
  return {
    type: 'TOGGLE_FILTER',
    month
  }
}

export function updateSearch(search) {
  return {
    type: 'UPDATE_SEARCH',
    search
  }
}
