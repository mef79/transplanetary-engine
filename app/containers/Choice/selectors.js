import { createSelector } from 'reselect'

/**
 * Direct selector to the choice state domain
 */
const selectChoiceDomain = () => state => state.get('choice')

/**
 * Other specific selectors
 */


/**
 * Default selector used by Choice
 */

const makeSelectChoice = () => createSelector(
  selectChoiceDomain(),
  (substate) => substate.toJS()
)

export default makeSelectChoice
export {
  selectChoiceDomain,
}
