/*
 *
 * Game reducer
 *
 */

import { fromJS } from 'immutable'
import {
  DEFAULT_ACTION,
  SET_CURRENT_STITCH
} from './constants'
import storyData from '../../ink/story.json'

const initialState = fromJS({
  storyData,
  currentStitch: null
})


function gameReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state
    case SET_CURRENT_STITCH:
      return state.set('currentStitch', state.get('storyData').get('data').get('stitches').get(action.stitchName))
    default:
      return state
  }
}

export default gameReducer
