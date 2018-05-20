/*
 *
 * Game
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import styled from 'styled-components'

import { selectCurrentStitch } from './selectors'
import { loadFromLocalStorage } from './actions'

import StitchContainer from 'containers/StitchContainer'
import TitlePage from 'containers/TitlePage'
import Menu from 'containers/Menu'
import SciFiBackground from 'images/scifibackground.jpg'

export class Game extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.loadFromLocalStorage()
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
    width:100%;
    width:480px
    background-size:contain;
    `
    return (
      <SiteWrapper>
        <Container>
          <Menu />
          { this.props.currentStitch ? <StitchContainer /> : <TitlePage /> }
        </Container>
      </SiteWrapper>
    )
  }
}

Game.propTypes = {
  currentStitch: PropTypes.object,
  loadFromLocalStorage: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  currentStitch: selectCurrentStitch()
})

function mapDispatchToProps(dispatch) {
  return {
    loadFromLocalStorage: () => dispatch(loadFromLocalStorage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
