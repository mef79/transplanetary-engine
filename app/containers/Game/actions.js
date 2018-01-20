/*
 *
 * Game actions
 *
 */

import {
  DEFAULT_ACTION,
  MAKE_DECISION,
  SET_CURRENT_STITCH,
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

export function setCurrentStitch(stitchName) {
  return {
    type: SET_CURRENT_STITCH,
    stitchName
  }
}
