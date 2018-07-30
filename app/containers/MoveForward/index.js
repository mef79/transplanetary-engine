/*
 *
 * MoveForward
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { setCurrentStitch } from 'containers/Game/actions'
import { selectCurrentStitch } from 'containers/Game/selectors'
import Choice from 'components/Choice'
import { queueSFX } from 'containers/App/actions'

class MoveForward extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  getDivert = stitch => {
    let divert
    stitch.content.forEach(element => {
      if (element.divert) {
        divert = element.divert
      }
    })
    return divert
  }

  choiceList = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }

  render() {
    return (
      <div style={this.choiceList}>
        <Choice
          clickFunc={ event => {
            event.preventDefault()
            this.props.navigateToStitch(this.getDivert(this.props.currentStitch.toJS()))
          }}
          text="Continue"
        />
      </div>
    )
  }
}

MoveForward.propTypes = {
  navigateToStitch: PropTypes.func.isRequired,
  currentStitch: PropTypes.object.isRequired,
}

const mapStateToProps = createStructuredSelector({
  currentStitch: selectCurrentStitch()
})

function mapDispatchToProps(dispatch) {
  return {
    navigateToStitch: stitchName => {
      dispatch(setCurrentStitch(stitchName))
      dispatch(queueSFX('doinkLo'))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoveForward)
