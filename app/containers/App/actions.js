/*
 *
 * App actions
 *
 */

import {
  PLAY_SOUND,
  SET_PLAYING_SOUND,
} from './constants'

export function playSound(sound) {
  return {
    type: PLAY_SOUND,
    meta: { sound }
  }
}

export function setPlayingSound(sound) {
  return {
    type: SET_PLAYING_SOUND,
    sound,
  }
}
