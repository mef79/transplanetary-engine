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

const selectCurrentStitchCollection = () => createSelector(
  selectGameDomain(),
  gameDomain => gameDomain.get('currentStitchCollection')
)

const selectOptions = () => createSelector(
  selectGameDomain(),
  gameDomain => gameDomain.get('options')
)

const selectFlags = () => createSelector(
  selectGameDomain(),
  gameDomain => gameDomain.get('flags')
)

const selectImage = () => createSelector(
  selectGameDomain(),
  gameDomain => gameDomain.get('image')
)

const isFinishedLoading = () => createSelector(
  selectGameDomain(),
  gameDomain => gameDomain.get('finishedLoading')
)

export {
  selectGameDomain,
  selectStoryTitle,
  selectInitialStitchName,
  selectCurrentStitch,
  selectCurrentStitchCollection,
  selectOptions,
  selectFlags,
  selectImage,
  isFinishedLoading,
}
