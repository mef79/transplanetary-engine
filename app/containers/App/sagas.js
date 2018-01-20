import { takeEvery, takeLatest, put, select } from 'redux-saga/effects'
import { saveData, playSound, setPlayingSound } from './actions'
// import { SET_CURRENT_STITCH, MAKE_DECISION } from 'containers/Game/actions'
import { SET_PLAYING_SOUND } from './constants'
import { MAKE_DECISION } from 'containers/Game/constants'
import { getVolume, getPlayingSound } from './selectors'

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

function* handleSound() {
  const volume = yield select(getVolume())
  const sound = yield select(getPlayingSound())
  if (sound) {
    yield put(playSound(sound, volume))
    yield put(setPlayingSound(undefined))
  }
}

export function* watchForSounds() {
  yield takeLatest(SET_PLAYING_SOUND, handleSound)
}

// All sagas to be loaded
export default [
  watchForSaveActions,
  watchForSounds,
]
