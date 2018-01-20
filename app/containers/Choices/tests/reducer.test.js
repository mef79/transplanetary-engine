
import { fromJS } from 'immutable'
import choicesReducer from '../reducer'

describe('choicesReducer', () => {
  it('returns the initial state', () => {
    expect(choicesReducer(undefined, {})).toEqual(fromJS({}))
  })
})
