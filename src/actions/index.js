
export function addFilter(month) {
  return {
    type: 'TOGGLE_FILTER',
    month
  }
}

export function removeFilter(month) {
  return {
    type: 'REMOVE_FILTER',
    month
  }
}

