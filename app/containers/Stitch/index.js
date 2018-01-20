/*
 *
 * Stitch
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Choices from 'containers/Choices'
import { selectCurrentStitch, selectCurrentStitchChoices } from 'containers/Game/selectors'
import TextFormatter from 'components/TextFormatter'

export class Stitch extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id="stitchContent">
        <TextFormatter content={this.props.currentStitch.get('content').get(0)} />
        <Choices choices={this.props.currentStitchChoices} />
      </div>
    )
  }
}

Stitch.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currentStitch: PropTypes.object.isRequired,
  currentStitchChoices: PropTypes.array
}

const mapStateToProps = createStructuredSelector({
  currentStitch: selectCurrentStitch(),
  currentStitchChoices: selectCurrentStitchChoices(),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stitch)
