
import { fromJS } from 'immutable'
import choiceReducer from '../reducer'

describe('choiceReducer', () => {
  it('returns the initial state', () => {
    expect(choiceReducer(undefined, {})).toEqual(fromJS({}))
  })
})
