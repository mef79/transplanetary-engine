/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable'
import {
  SET_PLAYING_SOUND,
} from './constants'

const initialState = fromJS({})

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PLAYING_SOUND:
      return state.set('playingSound', action.sound)
    default:
      return state
  }
}

export default appReducer
