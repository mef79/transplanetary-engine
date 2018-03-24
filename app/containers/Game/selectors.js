import { createSelector } from 'reselect'

/**
 * Direct selector to the game state domain
 */
const selectGameDomain = () => state => state.get('game')

const selectStoryTitle = () => createSelector(
  selectGameDomain(),
  gameDomain => gameDomain.get('storyData').get('title')
)

const selectInitialStitchName = () => createSelector(
  selectGameDomain(),
  gameDomain => gameDomain.get('storyData').get('data').get('initial')
)

const selectCurrentStitch = () => createSelector(
  selectGameDomain(),
  gameDomain => gameDomain.get('currentStitch')
)

const getVolume = () => createSelector(
  selectGameDomain(),
  gameDomain => gameDomain.get('volume')
)

const selectVisibleStitches = () => createSelector(
  selectGameDomain(),
  gameDomain => gameDomain.get('visibleStitches')
)

const selectOptions = () => createSelector(
  selectGameDomain(),
  gameDomain => gameDomain.get('options')
)

const selectFlags = () => createSelector(
  selectGameDomain(),
  gameDomain => gameDomain.get('flags')
)

export {
  selectGameDomain,
  selectStoryTitle,
  selectInitialStitchName,
  selectCurrentStitch,
  getVolume,
  selectVisibleStitches,
  selectOptions,
  selectFlags,
}
