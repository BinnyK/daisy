import reducer from './filterReducer';

const initialState = []

describe('filters reducer', () => {
  
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(initialState)
  });

  it('should handle TOGGLE_FILTER and add month if doesn\'t exist', () => {
    expect(
      reducer([], {
        type: 'TOGGLE_FILTER',
        month: 'jan'
      })
    ).toEqual(
      ['jan']
    )

    expect(
      reducer(
        [
          'jan'
        ],
        {
          type: 'TOGGLE_FILTER',
          month: 'feb'
        }
      )
    ).toEqual(
      ['jan', 'feb']
    )
  })

  it('should handle TOGGLE_FILTER and remove month if exists in state', () => {
    expect(
      reducer(
        ['jan', 'feb', 'mar'],
        {
          type: 'TOGGLE_FILTER',
          month: 'feb'
        }
      )
    ).toEqual(
      ['jan', 'mar']
    )
  })

});
