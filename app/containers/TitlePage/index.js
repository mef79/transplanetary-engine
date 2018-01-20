/*
 *
 * TitlePage
 *
 */
import styled from 'styled-components'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectStoryTitle, selectInitialStitchName, getVolume } from 'containers/Game/selectors'
import { setCurrentStitch } from 'containers/Game/actions'
import { setPlayingSound } from 'containers/App/actions'

export class TitlePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const Title = styled.h1`
      font-size:1.2em;
    `
    const PageLayout = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    `
    const onStartButtonClick = () => {
      this.props.onStartClick(this.props.initialStitchName)
    }
    return (
      <PageLayout>
        <Title>
          {this.props.title}
        </Title>
        <button onClick={onStartButtonClick}>
          Start Game
        </button>
      </PageLayout>
    )
  }
}

TitlePage.propTypes = {
  title: PropTypes.string.isRequired,
  initialStitchName: PropTypes.string.isRequired,
  onStartClick: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  title: selectStoryTitle(),
  initialStitchName: selectInitialStitchName(),
  volume: getVolume(),
})

function mapDispatchToProps(dispatch) {
  return {
    onStartClick: stitchName => {
      dispatch(setPlayingSound('doinkLo'))
      dispatch(setCurrentStitch(stitchName))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TitlePage)
