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
import { selectVisibleStitches } from 'containers/Game/selectors'
import Stitch from 'containers/Stitch'
import Choices from 'containers/Choices'
// import { selectors } from './selectors'

class StitchContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  greyBox = {
    backgroundColor:'#000e',
    color:'white',
    padding:'1em',
    width:'90%',
    margin: '1em'

  }

  container = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '95.5vh',
    margin: '1em'
  }

  renderStitches = () => {
    const renderedStitches = []
    let index = 0
    this.props.visibleStitches.forEach(stitch =>
      renderedStitches.push(<Stitch key={index++} stitch={stitch} />)
    )
    return renderedStitches
  }

  render() {
    return (
      <div style={this.container}>
        <div style={this.greyBox}>
          { this.renderStitches() }
        </div>
        <div style={{width:'90%'}}>

          <Choices />
        </div>
      </div>
    )
  }
}

StitchContainer.propTypes = {
  visibleStitches: PropTypes.object.isRequired,
}

const mapStateToProps = createStructuredSelector({
  visibleStitches: selectVisibleStitches(),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch
    // nameOfFunctionToCall: inputName => dispatch(nameOfAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StitchContainer)
