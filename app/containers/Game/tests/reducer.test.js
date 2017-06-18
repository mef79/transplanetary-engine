
import { fromJS } from 'immutable'
import gameReducer from '../reducer'

describe('gameReducer', () => {
  it('returns the initial state', () => {
    expect(gameReducer(undefined, {})).toEqual(fromJS({}))
  })
})
