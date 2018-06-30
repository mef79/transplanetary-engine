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
import { selectVisibleStitches, selectImage } from 'containers/Game/selectors'
import Stitch from 'containers/Stitch'
import Choices from 'containers/Choices'
import styled from 'styled-components'
import PortraitImage from 'components/PortraitImage'

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
    background-color: #000000ee;
    color: white;
    padding: .3em;
    width: 100%;
    margin-top: .5em;
    max-height: 26vh;
    min-height: 26vh;
    `
    const Container = styled.div`
    display: flex;
    flexDirection: column;
    alignItems: center;
    min-height:96.5vh;
    max-height:96.5vh;

    `
    const OtherContainer = styled.div`
    display: flex;
    flexDirection: column;
    alignItems: center;
    justify-content: space-around;
    `
    const PortraitContainer = styled.div`
    overflow:hidden;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    min-height:70.5vh;
    max-height:70.5vh;
    `
    return (
      <Container>
        <PortraitContainer>
          <PortraitImage imageUrl={this.props.imageUrl} />
        </PortraitContainer>
        <OtherContainer>
          <GrayBox>
            {this.renderStitches()}
            <Choices />
          </GrayBox>

        </OtherContainer>
      </Container>
    )
  }
}

StitchContainer.propTypes = {
  visibleStitches: PropTypes.object.isRequired,
  imageUrl: PropTypes.string,
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
