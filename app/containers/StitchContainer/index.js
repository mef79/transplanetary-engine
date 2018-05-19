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
import styled from 'styled-components'
import { selectImage } from 'containers/Game/selectors'

class StitchContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  renderStitches = () => {
    const renderedStitches = []
    let index = 0
    this.props.visibleStitches.forEach(stitch =>
      renderedStitches.push(<Stitch key={index++} stitch={stitch} />)
    )
    return renderedStitches
  }

  render() {
    const GrayBox = styled.div`
    background-color: #000b;
    color: white;
    padding: 1em;
    width: 90%;
    margin: 1em;
    `
    const Container = styled.div`
    display: flex;
    flexDirection: column;
    alignItems: center;
    `
    return (
      <Container>
        <img src={ this.imageUrl }/>
        <GrayBox>
          { this.renderStitches() }
        </GrayBox>
        <div style={ { width: '90%' } }>
          <Choices />
        </div>
      </Container>
    )
  }
}

StitchContainer.propTypes = {
  visibleStitches: PropTypes.object.isRequired,
}

const mapStateToProps = createStructuredSelector({
  visibleStitches: selectVisibleStitches(),
  imageUrl: selectImage(),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch
    // nameOfFunctionToCall: inputName => dispatch(nameOfAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StitchContainer)
