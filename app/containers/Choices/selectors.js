import { createSelector } from 'reselect'

/**
 * Direct selector to the choices state domain
 */
const selectChoicesDomain = () => state => state.get('choices')

/**
 * Other specific selectors
 */


/**
 * Default selector used by Choices
 */

const makeSelectChoices = () => createSelector(
  selectChoicesDomain(),
  substate => substate.toJS()
)

export default makeSelectChoices
export {
  selectChoicesDomain,
}
