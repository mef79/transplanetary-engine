import { createSelector } from 'reselect'

/**
 * Direct selector to the game state domain
 */
const selectGameDomain = () => state => state.get('game')

/**
 * Other specific selectors
 */


/**
 * Default selector used by Game
 */

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
  selectInitialStitchName
}
