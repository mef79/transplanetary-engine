/*
 *
 * Game actions
 *
 */

import {
  DEFAULT_ACTION,
  MAKE_DECISION,
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
