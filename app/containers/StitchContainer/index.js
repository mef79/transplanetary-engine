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
import {
  selectCurrentStitchCollection,
  selectCurrentStitch,
  selectImage
} from 'containers/Game/selectors'
import Stitch from 'containers/Stitch'
import Choices from 'containers/Choices'
import MoveForward from 'containers/MoveForward'
import styled from 'styled-components'
import PortraitImage from 'components/PortraitImage'

class StitchContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  getOptions = stitch => {
    const options = []
    stitch.content.forEach(element => {
      if (element.option) {
        options.push(element)
      }
    })
    return options
  }

  renderStitches = () => {
    const renderedStitches = []
    let index = 0
    this.props.currentStitchCollection.forEach(stitch =>
      renderedStitches.push(<Stitch key={index++} stitch={stitch} />)
    )
  }

  renderBottomContent = () => {
    if (this.getOptions(this.props.currentStitch.toJS()).length !== 0) {
      return <Choices />
    }
    return <MoveForward />
  }

  render() {
    const GrayBox = styled.div`
    background-color: #000000ee;
    color: white;
    padding: .3em;
    width: 100%;
    margin-top: .5em;

    `
    const Container = styled.div`
    display: flex;
    flexDirection: column;
    alignItems: center;


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
    min-height:300px;
    margin-top:20px;

    `
    return (
      <Container>
        <PortraitContainer>
          <PortraitImage imageUrl={this.props.imageUrl} />
        </PortraitContainer>
        <OtherContainer>
          <GrayBox>
            <Stitch stitch={this.props.currentStitch} />
            { this.renderBottomContent() }
          </GrayBox>

        </OtherContainer>
      </Container>
    )
  }
}

StitchContainer.propTypes = {
  currentStitchCollection: PropTypes.object.isRequired,
  currentStitch: PropTypes.object.isRequired,
  imageUrl: PropTypes.string,
}

const mapStateToProps = createStructuredSelector({
  currentStitchCollection: selectCurrentStitchCollection(),
  currentStitch: selectCurrentStitch(),
  imageUrl: selectImage(),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch
    // nameOfFunctionToCall: inputName => dispatch(nameOfAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StitchContainer)
