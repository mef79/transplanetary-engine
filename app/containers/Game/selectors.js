import { createSelector } from 'reselect'

/**
 * Direct selector to the game state domain
 */
const selectGameDomain = () => state => state.get('game')

const makeSelectGame = () => createSelector(
  selectGameDomain(),
  substate => substate.toJS()
)

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

const selectCurrentStitchChoices = () => createSelector(
  selectCurrentStitch(),
  currentStitch => {
    const choices = []
    currentStitch.get('content').toJS().forEach(element => {
      if (element.option) {
        choices.push(element)
      }
    })
    return choices
  }
)

const getVolume = () => createSelector(
  selectGameDomain(),
  gameDomain => gameDomain.get('volume')
)

const getVisibleStitches = startingStitchName => createSelector(
  selectGameDomain(),
  gameDomain => {
    const storyData = gameDomain.get('storyData').get('data')
    let current = storyData.get('storyData').get('data').get('stitches').get(startingStitchName).toJS()
    const visibleStitches = [current]
    let options = getOptions(current)
    let divert = getDivert(current)

    // meaning there was a divert and not some options
    while (options.length === 0) {
      current = divert
      visibleStitches.append(current)
      divert = getDivert(current)
      options = getOptions(current)
    }

    // what do with options?

    // also this needs to track flags/counters

    return visibleStitches
  }
)

const getOptions = stitch => {
  const options = []
  stitch.content.forEach(element => {
    if (element.option) {
      options.push(element)
    }
  })
  return options
}

const getDivert = stitch => {
  stitch.content.forEach(element => {
    if (element.divert) {
      return element.divert
    }
  })
  return undefined
}

/*
const getSelectedNode = () => createSelector(
  selectHome,
  selectCurrentNodeId,
  (homeState, selectedNodeId) => homeState.get('currentData').get('nodes').find(e => e.get('id') === selectedNodeId))

*/
export default makeSelectGame
export {
  selectGameDomain,
  selectStoryTitle,
  selectInitialStitchName,
  selectCurrentStitch,
  selectCurrentStitchChoices,
  getVolume,
  getVisibleStitches,
}
