import { takeEvery, takeLatest, put, select } from 'redux-saga/effects'
import {
  playSound,
  queueSFX,
  queueMusic,
  setPlayingMusic,
  stopSound
} from './actions'
import { QUEUE_SFX, QUEUE_MUSIC } from './constants'
import {
  SET_CURRENT_CONTEXT,
  LOAD_FROM_LOCAL_STORAGE
} from 'containers/Game/constants'
import { getQueuedSFX, getPlayingMusic } from './selectors'
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

  localStorage.setItem('currentStitchCollection', JSON.stringify(gameDataJS.currentStitchCollection))
  localStorage.setItem('currentStitch', JSON.stringify(gameDataJS.currentStitch))
  localStorage.setItem('image', JSON.stringify(gameDataJS.image))
  localStorage.setItem('options', JSON.stringify(gameDataJS.options))
  localStorage.setItem('flags', JSON.stringify(gameDataJS.flags))

  // queue new music
  const transitions = fromJS(musicTransitions)
  if (transitions.has(action.stitchName)) {
    yield put(queueMusic(transitions.get(action.stitchName)))
  }
}

export function* watchForSaveActions() {
  yield takeEvery(SET_CURRENT_CONTEXT, handleDecisions)
}

function* handleSFX() {
  const sound = yield select(getQueuedSFX())
  if (sound) {
    yield put(playSound(sound))
    yield put(queueSFX(undefined))
  }
}

export function* watchForSFX() {
  yield takeLatest(QUEUE_SFX, handleSFX)
}

function* handleMusic(action) {
  // stop the current music if there is any
  const playingMusic = yield select(getPlayingMusic())
  if (playingMusic) {
    yield put(stopSound(playingMusic))
  }

  // play the sound and let the store know about it
  yield put(playSound(action.sound))
  yield put(setPlayingMusic(action.sound))

  // store name of currently playing song in local storage
  // so that it will start if player comes back
  localStorage.setItem('playingMusic', action.sound)
}

export function* watchForMusic() {
  yield takeLatest(QUEUE_MUSIC, handleMusic)
}

function* playMusicOnLoad() {
  const playingMusic = localStorage.playingMusic
  yield put(playSound(playingMusic))
  yield put(setPlayingMusic(playingMusic))
}

export function* watchForLoad() {
  yield takeLatest(LOAD_FROM_LOCAL_STORAGE, playMusicOnLoad)
}

// All sagas to be loaded
export default [
  watchForSaveActions,
  watchForSFX,
  watchForMusic,
  watchForLoad,
]
