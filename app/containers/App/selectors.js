import { createSelector } from 'reselect'

const selectAppDomain = () => state => state.get('app')

// makeSelectLocationState expects a plain JS object for the routing state
const makeSelectLocationState = () => {
  let prevRoutingState
  let prevRoutingStateJS

  return state => {
    const routingState = state.get('route') // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState
      prevRoutingStateJS = routingState.toJS()
    }

    return prevRoutingStateJS
  }
}

const getPlayingSound = () => createSelector(
  selectAppDomain(),
  appDomain => appDomain.get('playingSound')
)

export {
  makeSelectLocationState,
  getPlayingSound,
}
