import reducer from './flowersReducer';

import initialState from '../flowers';

describe('flowers reducer', () => {
  
  it('should return the initial state', () => {
    expect(
      reducer([], {})
    ).toEqual([])
  });

});

