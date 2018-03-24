/*
 *
 * Game
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCurrentStitch } from './selectors'
import { loadFromLocalStorage } from './actions'

import StitchContainer from 'containers/StitchContainer'
import TitlePage from 'containers/TitlePage'
import Menu from 'containers/Menu'

export class Game extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.loadFromLocalStorage()
  }

  render() {
    return (
      <div>
        <Menu />
        { this.props.currentStitch ? <StitchContainer /> : <TitlePage /> }
      </div>
    )
  }
}

Game.propTypes = {
  currentStitch: PropTypes.object,
  loadFromLocalStorage: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  currentStitch: selectCurrentStitch()
})

function mapDispatchToProps(dispatch) {
  return {
    loadFromLocalStorage: () => dispatch(loadFromLocalStorage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
