
import { fromJS } from 'immutable'
import stitchContainerReducer from '../reducer'

describe('stitchContainerReducer', () => {
  it('returns the initial state', () => {
    expect(stitchContainerReducer(undefined, {})).toEqual(fromJS({}))
  })
})
