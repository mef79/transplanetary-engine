/*
 *
 * Game
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import makeSelectGame from './selectors'
// import messages from './messages'

import SceneContext from 'components/SceneContext'

export class Game extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SceneContext />
    )
  }
}

Game.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  Game: makeSelectGame()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
