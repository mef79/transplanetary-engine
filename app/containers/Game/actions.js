/*
 *
 * Game actions
 *
 */

import {
  DEFAULT_ACTION,
  MAKE_DECISION,
  SET_CURRENT_CONTEXT,
} from './constants'

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  }
}

export function makeDecision() {
  return {
    type: MAKE_DECISION
  }
}

export function setCurrentContext(stitchName) {
  return {
    type: SET_CURRENT_CONTEXT,
    stitchName
  }
}
