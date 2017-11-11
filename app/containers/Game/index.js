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

import TitlePage from 'containers/TitlePage'

export class Game extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        { /* <Menu /> */ }
        <TitlePage />
      </div>
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
