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
    const Container = styled.div`
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;`

    const TextContent = styled.div`
      background-color: black;
      color: white;
      flex-grow: 1;
      padding:15px;
      /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#4c4c4c+0,595959+12,666666+21,474747+35,2c2c2c+57,2b2b2b+76,1c1c1c+91,131313+100 */
      background: #4c4c4c; /* Old browsers */
      background: -moz-linear-gradient(top, #4c4c4c 0%, #595959 12%, #666666 21%, #474747 35%, #2c2c2c 57%, #2b2b2b 76%, #1c1c1c 91%, #131313 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(top, #4c4c4c 0%, #595959 12%, #666666 21%, #474747 35%, #2c2c2c 57%, #2b2b2b 76%, #1c1c1c 91%, #131313 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom, #4c4c4c 0%, #595959 12%, #666666 21%, #474747 35%, #2c2c2c 57%, #2b2b2b 76%, #1c1c1c 91%, #131313 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313',GradientType=0 ); /* IE6-9 */`;

    const PortraitContainer = styled.div`
      background-color: rebeccapurple;
      max-height:450px;
      min-height:450px;
    `
    return (
      <Container>
        <PortraitContainer>
          <PortraitImage imageUrl={this.props.imageUrl} />
        </PortraitContainer>
        <TextContent>
            <Stitch stitch={this.props.currentStitch} />
            { this.renderBottomContent() }
        </TextContent>
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
