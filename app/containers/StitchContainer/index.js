/*
 *
 * StitchContainer
 *
 * usage: import StitchContainer from 'containers/StitchContainer'
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getVisibleStitches } from 'containers/Game/selectors'
import Stitch from 'containers/Stitch'
// import { selectors } from './selectors'

class StitchContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderStitches = () => {
    let renderedStitches = []
    let index = 0
    this.props.visibleStitches.forEach(stitch => renderedStitches.push(<Stitch key={index++} stitch={stitch}/>))
    return renderedStitches
  }

  render() {
    return (
      <div>
        {this.renderStitches()}
      </div>
    )
  }
}

StitchContainer.propTypes = {
  // specify proptypes here
}

const mapStateToProps = createStructuredSelector({
  visibleStitches: getVisibleStitches(),
})

function mapDispatchToProps(dispatch) {
  return {
    // nameOfFunctionToCall: inputName => dispatch(nameOfAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StitchContainer)
