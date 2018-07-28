/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable'
import {
  QUEUE_SFX,
  QUEUE_MUSIC,
  SET_PLAYING_MUSIC,
} from './constants'

const initialState = fromJS({})

function appReducer(state = initialState, action) {
  switch (action.type) {
    case QUEUE_SFX:
      return state.set('queuedSFX', action.sound)
    case QUEUE_MUSIC:
      return state.set('queuedMusic', action.sound)
    case SET_PLAYING_MUSIC:
      return state.set('playingMusic', action.sound)
    default:
      return state
  }
}

export default appReducer
