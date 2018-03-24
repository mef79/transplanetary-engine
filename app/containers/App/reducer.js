/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable'
import {
  SET_PLAYING_SOUND,
  SET_VOLUME,
} from './constants'

const initialState = fromJS({
  volume: 2,
})

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PLAYING_SOUND:
      return state.set('playingSound', action.sound)
    case SET_VOLUME:
      return state.set('volume', action.volume)
    default:
      return state
  }
}

export default appReducer
