/*
 *
 * Game actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_CURRENT_STITCH
} from './constants'

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  }
}

export function setCurrentStitch(stitchName){
  return{
    type: SET_CURRENT_STITCH,
    stitchName
  }
}
