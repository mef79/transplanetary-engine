/*
 *
 * App actions
 *
 */

import {
  PLAY_SOUND,
  STOP_SOUND,
  QUEUE_SFX,
  QUEUE_MUSIC,
  SET_PLAYING_MUSIC,
} from './constants'

export function playSound(sound) {
  return {
    type: PLAY_SOUND,
    meta: { sound }
  }
}

export function stopSound(sound) {
  return {
    type: STOP_SOUND,
    meta: { stopSound: sound }
  }
}

export function queueSFX(sound) {
  return {
    type: QUEUE_SFX,
    sound,
  }
}

export function queueMusic(sound) {
  return {
    type: QUEUE_MUSIC,
    sound,
  }
}


export function setPlayingMusic(sound) {
  return {
    type: SET_PLAYING_MUSIC,
    sound,
  }
}
