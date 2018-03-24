/*
 *
 * App actions
 *
 */

import {
  PLAY_SOUND,
  SET_PLAYING_SOUND,
  SET_VOLUME,
} from './constants'

export function playSound(sound, volume) {
  return {
    type: PLAY_SOUND,
    meta: { sound: `${sound}_volume_${volume.toString()}` }
  }
}

export function setPlayingSound(sound) {
  return {
    type: SET_PLAYING_SOUND,
    sound,
  }
}

export function setVolume(volume) {
  return {
    type: SET_VOLUME,
    volume,
  }
}
