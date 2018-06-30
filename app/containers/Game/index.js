/*
 *
 * Game
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import styled from 'styled-components'

import { selectCurrentStitch, isFinishedLoading } from './selectors'
import { loadFromLocalStorage } from './actions'

import StitchContainer from 'containers/StitchContainer'
import TitlePage from 'containers/TitlePage'
import Menu from 'containers/Menu'
import SciFiBackground from 'images/scifibackground.jpg'

export class Game extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    if (!this.props.finishedLoading) {
      this.props.loadFromLocalStorage()
    }
  }

  render() {
    const SiteWrapper = styled.div`
    background-color:black;
    height:100%;
    width:100%;
    display: flex;
    align-items:center;
    justify-content:center;
    `
    const Container = styled.div`
    background: url(${SciFiBackground}) no-repeat center center fixed;
    min-height: 100vh;
    max-height: 100vh;
    `

    let content = null
    if (this.props.finishedLoading) {
      content = this.props.currentStitch ? <StitchContainer /> : <TitlePage />
    }

    return (
      <SiteWrapper>
        <Container>
          <Menu />
          { content }
        </Container>
      </SiteWrapper>
    )
  }
}

Game.propTypes = {
  currentStitch: PropTypes.object,
  loadFromLocalStorage: PropTypes.func,
  finishedLoading: PropTypes.bool.isRequired,
}

const mapStateToProps = createStructuredSelector({
  currentStitch: selectCurrentStitch(),
  finishedLoading: isFinishedLoading(),
})

function mapDispatchToProps(dispatch) {
  return {
    loadFromLocalStorage: () => dispatch(loadFromLocalStorage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
