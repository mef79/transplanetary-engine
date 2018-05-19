/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux'
import { fromJS } from 'immutable'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createReducer from './reducers'
import soundsMiddleware from 'redux-sounds'
import doinkloFile from 'music/doinklo.mp3'
import mainThemeFile from 'music/main.ogg'
import endThemeFile from 'music/end.ogg'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState = {}, history) {
  // Our soundsData is an object. The keys are the names of our sounds.
  const allSounds = {
    doinkLo: doinkloFile,
    mainTheme: {
      urls: [mainThemeFile],
      loop: true,
    },
    endTheme: {
      urls: [endThemeFile],
      loop: true,
    },
  }

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
    soundsMiddleware(allSounds),
  ]

  const enhancers = [
    applyMiddleware(...middlewares),
  ]

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose
  /* eslint-enable */

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  )

  // Extensions
  store.runSaga = sagaMiddleware.run
  store.asyncReducers = {} // Async reducer registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      import('./reducers').then(reducerModule => {
        const createReducers = reducerModule.default
        const nextReducers = createReducers(store.asyncReducers)

        store.replaceReducer(nextReducers)
      })
    })
  }

  return store
}
