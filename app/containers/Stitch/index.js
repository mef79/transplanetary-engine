/*
 *
 * Stitch
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCurrentStitch, selectCurrentStitchChoices } from 'containers/Game/selectors'
import { Choices } from 'containers/Choices'

export class Stitch extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  formatStitchContent = content => {
    let updatedContent = content.replace(/\/=/, '<span class="small-caps">')
    updatedContent = updatedContent.replace(/=\//, '</span>')
    updatedContent = updatedContent.replace(/\*-/, '<span class="bold">')
    updatedContent = updatedContent.replace(/-\*/, '</span>')
    return updatedContent
  }

  render() {
    return (
      <div>
        <div
        id="stitchContent"
        dangerouslySetInnerHTML={{ __html: this.formatStitchContent(this.props.currentStitch.get('content').get(0)) }}
        />
        <Choices choices={this.props.currentStitchChoices}/>
      </div>
    )
  }
}

Stitch.propTypes = {
  dispatch: PropTypes.func.isRequired,
  currentStitch: PropTypes.object.isRequired,
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
