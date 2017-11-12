
import { fromJS } from 'immutable'
import stitchReducer from '../reducer'

describe('stitchReducer', () => {
  it('returns the initial state', () => {
    expect(stitchReducer(undefined, {})).toEqual(fromJS({}))
  })
})
