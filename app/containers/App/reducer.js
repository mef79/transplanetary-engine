/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable'
import {
  SET_PLAYING_SFX,
  SET_PLAYING_MUSIC,
} from './constants'

const initialState = fromJS({})

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PLAYING_SFX:
      return state.set('playingSFX', action.sound)
    case SET_PLAYING_MUSIC:
      return state.set('playingMusic', action.sound)
    default:
      return state
  }
}

export default appReducer
