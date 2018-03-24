/*
 *
 * Game reducer
 *
 */

import { fromJS } from 'immutable'
import {
  DEFAULT_ACTION,
  SET_CURRENT_CONTEXT,
  LOAD_FROM_LOCAL_STORAGE,
  CLEAR_LOCAL_STORAGE,
} from './constants'
import storyData from '../../ink/story.json'

const initialState = fromJS({
  storyData,
  currentStitch: null,
  flags: {}
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

const getFlags = stitch => {
  const flags = {}
  stitch.content.forEach(element => {
    if (element.flagName) {
      if (element.flagName.indexOf('+') > -1) {
        const name = element.flagName.split('+')[0].trim()
        const inc = element.flagName.split('+')[1].trim()
        flags[name] = parseInt(inc, 10)
      }
      else if (element.flagName.indexOf('-') > -1) {
        const name = element.flagName.split('-')[0].trim()
        const inc = element.flagName.split('-')[1].trim()
        flags[name] = parseInt(inc, 10) * -1
      }
      else {
        flags[element.flagName] = true
      }
    }
  })
  return flags
}

const mergeFlags = (flags1, flags2) => {
  const countFlags = {}

  // smoosh counts together
  Object.keys(flags1).forEach(key => {
    if (!!flags2[key] && (typeof flags2[key] === 'number')) {
      countFlags[key] = flags1[key] + flags2[key]
    }
  })

  // combine the rest of the keys into a new object
  return Object.assign({}, flags1, flags2, countFlags)
}

function gameReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state
    case SET_CURRENT_CONTEXT:
      // grab the whole structure from the store
      const stitches = state.get('storyData').get('data').get('stitches').toJS()

      // this is the whole stitch object
      let current = stitches[action.stitchName]

      // start with just the current stitch visible
      const visibleStitches = [current]

      // keep track of this object's flags
      let flags = mergeFlags(state.get('flags').toJS(), getFlags(current))

      // attempt to get both options (end of the line) and divert (another stitch has the options)
      // only one of these will be filled out at this step
      let options = getOptions(current)
      let divert = getDivert(current) ? stitches[getDivert(current)] : undefined

      // there was a divert, so we go get the next one until we run into a set of options
      while (options.length === 0) {
        current = divert
        visibleStitches.push(current)
        divert = getDivert(current) ? stitches[getDivert(current)] : undefined
        options = getOptions(current)
        flags = mergeFlags(flags, getFlags(current))
      }

      // also this needs to track flags/counters
      return state
        .set('currentStitch', fromJS(stitches[action.stitchName]))
        .set('visibleStitches', fromJS(visibleStitches))
        .set('options', fromJS(options))
        .set('flags', fromJS(flags))
    case LOAD_FROM_LOCAL_STORAGE:
      if (localStorage.getItem('currentStitch')) {
        return state
          .set('currentStitch', fromJS(JSON.parse(localStorage.getItem('currentStitch'))))
          .set('visibleStitches', fromJS(JSON.parse(localStorage.getItem('visibleStitches'))))
          .set('options', fromJS(JSON.parse(localStorage.getItem('options'))))
          .set('flags', fromJS(JSON.parse(localStorage.getItem('flags'))))
      }
      return state
    case CLEAR_LOCAL_STORAGE:
      localStorage.removeItem('currentStitch')
      localStorage.removeItem('visibleStitches')
      localStorage.removeItem('options')
      localStorage.removeItem('flags')
      return state
        .set('currentStitch', null)
        .set('visibleStitches', null)
        .set('options', null)
        .set('flags', fromJS({}))
    default:
      return state
  }
}

export default gameReducer
