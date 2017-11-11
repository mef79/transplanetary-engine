import { takeEvery, put } from 'redux-saga/effects'
import { saveData } from './actions'
// import { SET_CURRENT_STITCH, MAKE_DECISION } from 'containers/Game/actions'
import { MAKE_DECISION } from 'containers/Game/constants'

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}

export function* handleDecisions() {
  // when decisions are made, they must fire an action to update an object containing all decisions
  yield put(saveData())
}

export function* handleStitchTransitions() {
  // when the current stitch gets updated
  yield put(saveData())
}

export function* watchForSaveActions() {
  yield takeEvery(MAKE_DECISION, handleDecisions)
  // yield takeEvery(SET_CURRENT_STITCH, handleStitchTransitions)
}

// All sagas to be loaded
export default [
  watchForSaveActions,
]
