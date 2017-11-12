/*
 *
 * Stitch
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {selectCurrentStitch } from 'containers/Game/selectors'

export class Stitch extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {this.props.currentStitch.get('content').get(0)}
      </div>
    )
  }
}

Stitch.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  currentStitch: selectCurrentStitch()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stitch)
