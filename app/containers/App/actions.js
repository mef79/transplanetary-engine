/*
 *
 * App actions
 *
 */

import {
  SET_SAVED_DATA,
  SAVE_DATA,
  SET_COOKIES,
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
