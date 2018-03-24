import { takeEvery, takeLatest, put, select } from 'redux-saga/effects'
import { playSound, setPlayingSound } from './actions'
import { SET_PLAYING_SOUND } from './constants'
import { SET_CURRENT_CONTEXT } from 'containers/Game/constants'
import { getVolume, getPlayingSound } from './selectors'
import { selectGameDomain } from 'containers/Game/selectors'

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}

export function* handleDecisions() {
  // when decisions are made, they must fire an action to update an object containing all decisions
  const gameData = yield select(selectGameDomain())
  const gameDataJS = gameData.toJS()
  localStorage.setItem('visibleStitches', JSON.stringify(gameDataJS.visibleStitches))
  localStorage.setItem('currentStitch', JSON.stringify(gameDataJS.currentStitch))
  localStorage.setItem('options', JSON.stringify(gameDataJS.options))
  localStorage.setItem('flags', JSON.stringify(gameDataJS.flags))
}

export function* watchForSaveActions() {
  yield takeEvery(SET_CURRENT_CONTEXT, handleDecisions)
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
