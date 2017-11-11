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
import { makeDecision } from './actions'

import SceneContext from 'components/SceneContext'

export class Game extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.makeDecision()
  }

  render() {
    return (
      <SceneContext />
    )
  }
}

Game.propTypes = {
  makeDecision: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  Game: makeSelectGame()
})

function mapDispatchToProps(dispatch) {
  return {
    makeDecision: () => dispatch(makeDecision())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
