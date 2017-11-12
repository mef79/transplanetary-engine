
import { fromJS } from 'immutable'
import titlePageReducer from '../reducer'

describe('titlePageReducer', () => {
  it('returns the initial state', () => {
    expect(titlePageReducer(undefined, {})).toEqual(fromJS({}))
  })
})
