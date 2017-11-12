/*
 *
 * Game
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentStitch } from './selectors'
import { makeDecision } from './actions'

import Stitch from 'containers/Stitch'
import TitlePage from 'containers/TitlePage'

export class Game extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    // TODO: this will gotta go somewhere else, but a thing needs to fire when a decision is made
    // update App/sagas so that it watches for the function that replaces this
    this.props.makeDecision()
  }

  render() {
    return this.props.currentStitch ? <Stitch /> : <TitlePage />
  }
}

Game.propTypes = {
  makeDecision: PropTypes.func.isRequired,
  currentStitch: PropTypes.object,
}

const mapStateToProps = createStructuredSelector({
  currentStitch: selectCurrentStitch()
})

function mapDispatchToProps(dispatch) {
  return {
    makeDecision: () => dispatch(makeDecision())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
