import { takeEvery, takeLatest, put, select } from 'redux-saga/effects'
import { playSound, setPlayingSFX, setPlayingMusic } from './actions'
import { SET_PLAYING_SFX, SET_PLAYING_MUSIC } from './constants'
import { SET_CURRENT_CONTEXT } from 'containers/Game/constants'
import { getPlayingSFX, getPlayingMusic } from './selectors'
import { selectGameDomain } from 'containers/Game/selectors'
import musicTransitions from '../../ink/music.json'
import { fromJS } from 'immutable'

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}

export function* handleDecisions(action) {
  // when decisions are made, they must fire an action to update an object containing all decisions
  const gameData = yield select(selectGameDomain())
  const gameDataJS = gameData.toJS()
  let music = yield select(getPlayingMusic())
  const transitions = fromJS(musicTransitions)
  if (transitions.has(action.stitchName)) {
    music = transitions.get(action.stitchName)
    yield put(setPlayingMusic(music))
  }
  localStorage.setItem('visibleStitches', JSON.stringify(gameDataJS.visibleStitches))
  localStorage.setItem('currentStitch', JSON.stringify(gameDataJS.currentStitch))
  localStorage.setItem('options', JSON.stringify(gameDataJS.options))
  localStorage.setItem('flags', JSON.stringify(gameDataJS.flags))
  localStorage.setItem('playingMusic', music)
}

export function* watchForSaveActions() {
  yield takeEvery(SET_CURRENT_CONTEXT, handleDecisions)
}

function* handleSFX() {
  const sound = yield select(getPlayingSFX())
  if (sound) {
    yield put(playSound(sound))
    yield put(setPlayingSFX(undefined))
  }
}

export function* watchForSFX() {
  yield takeLatest(SET_PLAYING_SFX, handleSFX)
}

function* handleMusic() {
  const music = yield select(getPlayingMusic())
  if (music) {
    yield put(playSound(music))
  }
}

export function* watchForMusic() {
  yield takeLatest(SET_PLAYING_MUSIC, handleMusic)
}

// All sagas to be loaded
export default [
  watchForSaveActions,
  watchForSFX,
  watchForMusic,
]
