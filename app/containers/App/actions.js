/*
 *
 * App actions
 *
 */

import {
  PLAY_SOUND,
  SET_PLAYING_SFX,
  SET_PLAYING_MUSIC,
} from './constants'

export function playSound(sound) {
  return {
    type: PLAY_SOUND,
    meta: { sound }
  }
}

export function setPlayingSFX(sound) {
  return {
    type: SET_PLAYING_SFX,
    sound,
  }
}

export function setPlayingMusic(sound) {
  return {
    type: SET_PLAYING_MUSIC,
    sound,
  }
}
