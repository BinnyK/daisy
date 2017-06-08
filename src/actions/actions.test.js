import * as actions from './index';

describe('actions', () => {
  it('should create an action to toggle filter', () => {
    const month = 'jan'
    const expectedAction = {
      type: 'TOGGLE_FILTER',
      month
    }
    expect(actions.toggleFilter(month)).toEqual(expectedAction)
  });

  it('should create an action to toggle filter', () => {
    const search = 'daisy';
    const expectedAction = {
      type: 'UPDATE_SEARCH',
      search
    }
    expect(actions.updateSearch(search)).toEqual(expectedAction)
  })

})
