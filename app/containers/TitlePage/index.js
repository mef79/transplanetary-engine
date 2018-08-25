/*
 *
 * TitlePage
 *
 */
import styled from 'styled-components'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectStoryTitle, selectInitialStitchName } from 'containers/Game/selectors'
import { setCurrentContext } from 'containers/Game/actions'
import { queueSFX, queueMusic } from 'containers/App/actions'

export class TitlePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.playMusic('main')
  }

  render() {
    const Title = styled.h1`
    border:1px solid white;
    padding: 1px;
    margin: 1px;
    `
    const PageLayout = styled.div`
    border:1px solid white;
    margin: 1px;
    padding: 1px;
    flex-grow: 1;
    `
    const GrayBox = styled.div`
    border:1px solid black;
    padding: 1px;
    margin: 1px;
    `
    const onStartButtonClick = () => {
      this.props.onStartClick(this.props.initialStitchName)
    }
    return (
      <PageLayout>
        <Title>
          {this.props.title}
        </Title>
        <GrayBox onClick={onStartButtonClick}>
          Start Game
        </GrayBox>
      </PageLayout>
    )
  }
}

TitlePage.propTypes = {
  title: PropTypes.string.isRequired,
  initialStitchName: PropTypes.string.isRequired,
  onStartClick: PropTypes.func.isRequired,
  playMusic: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
  title: selectStoryTitle(),
  initialStitchName: selectInitialStitchName(),
})

function mapDispatchToProps(dispatch) {
  return {
    onStartClick: stitchName => {
      dispatch(queueSFX('doinkLo'))
      dispatch(setCurrentContext(stitchName))
    },
    playMusic: () => {
      dispatch(queueMusic('mainTheme'))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TitlePage)
