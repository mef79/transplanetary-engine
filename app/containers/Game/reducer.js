/*
 *
 * Game reducer
 *
 */

import { fromJS } from 'immutable'
import {
  DEFAULT_ACTION,
  SET_CURRENT_CONTEXT,
  MAKE_DECISION,
} from './constants'
import storyData from '../../ink/story.json'

const initialState = fromJS({
  storyData,
  currentStitch: null,
})

const getOptions = stitch => {
  const options = []
  stitch.content.forEach(element => {
    if (element.option) {
      options.push(element)
    }
  })
  return options
}

const getDivert = stitch => {
  let divert
  stitch.content.forEach(element => {
    if (element.divert) {
      divert = element.divert
    }
  })
  return divert
}

function gameReducer(state = initialState, action) {
  switch (action.type) {
    case MAKE_DECISION:
      return state
    case DEFAULT_ACTION:
      return state
    case SET_CURRENT_CONTEXT:
      const stitches = state.get('storyData').get('data').get('stitches').toJS()
      let current = stitches[action.stitchName]
      const visibleStitches = [current]
      let options = getOptions(current)
      let divert = getDivert(current) ? stitches[getDivert(current)] : undefined

      // meaning there was a divert and not some options
      while (options.length === 0) {
        current = divert
        visibleStitches.push(current)
        divert = getDivert(current) ? stitches[getDivert(current)] : undefined
        options = getOptions(current)
      }

      // also this needs to track flags/counters
      return state
        .set('currentStitch', fromJS(stitches[action.stitchName]))
        .set('visibleStitches', fromJS(visibleStitches))
        .set('options', fromJS(options))
    default:
      return state
  }
}

export default gameReducer
