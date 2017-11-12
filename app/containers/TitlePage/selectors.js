import { createSelector } from 'reselect'

/**
 * Direct selector to the titlePage state domain
 */
const selectTitlePageDomain = () => state => state.get('titlePage')

/**
 * Other specific selectors
 */


/**
 * Default selector used by TitlePage
 */

const makeSelectTitlePage = () => createSelector(
  selectTitlePageDomain(),
  substate => substate.toJS()
)

export default makeSelectTitlePage
export {
  selectTitlePageDomain,
}
