/*
 *
 * App actions
 *
 */

import {
  SET_SAVED_DATA,
  SAVE_DATA,
  SET_COOKIES,
  PLAY_SOUND,
  SET_PLAYING_SOUND,
  SET_VOLUME,
} from './constants'

export function setSavedData() {
  return {
    type: SET_SAVED_DATA,
  }
}

export function saveData() {
  return {
    type: SAVE_DATA
  }
}

export function setCookies(cookies) {
  return {
    type: SET_COOKIES,
    cookies
  }
}

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
