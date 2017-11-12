/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable'
import {
  SET_SAVED_DATA,
  SAVE_DATA,
  SET_COOKIES,
} from './constants'

const initialState = fromJS({
  savedData: {
    loadCounter: 0
  },
  cookies: undefined,
})

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SAVED_DATA:
      const newSavedData = action.savedData || {}
      if (!newSavedData.loadCounter) {
        newSavedData.loadCounter = 0
      }
      return state.set('savedData', fromJS(newSavedData))

    case SAVE_DATA:
      // placeholder: in the future, there will need to be an action fired after the
      // user either changes their current stitch or makes any sort of decision

      // update saved data object in state
      state.setIn(['savedData', 'loadCounter'], state.get('loadCounter') + 1)

      // update cookie with the newly saved object
      state.get('cookies').set('savedData', state.get('savedData'))

      return state

    case SET_COOKIES:
      return state.set('cookies', action.cookies)

    default:
      return state
  }
}

export default appReducer
