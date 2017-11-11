/*
 *
 * Game reducer
 *
 */

import { fromJS } from 'immutable'
import {
  DEFAULT_ACTION,
  MAKE_DECISION,
} from './constants'
import storyData from '../../ink/story.json'

const initialState = fromJS({ storyData })

function gameReducer(state = initialState, action) {
  switch (action.type) {
    case MAKE_DECISION:
      return state
    case DEFAULT_ACTION:
      return state
    default:
      return state
  }
}

export default gameReducer
