/*
 *
 * TitlePage
 *
 */
import styled from 'styled-components'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectStoryTitle, selectInitialStitchName } from '../Game/selectors'
import { setCurrentStitch } from '../Game/actions'

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
    return (

      <PageLayout>
        <Title>
          {this.props.title}
        </Title>
        <button onClick={this.props.onStartClick(this.props.initialStitchName)}>
        Start Game
        </button>
      </PageLayout>
    )
  }
}

TitlePage.propTypes = {

  title: PropTypes.string.isRequired,
  initialStitchName: PropTypes.string.isRequired,
}

const mapStateToProps = createStructuredSelector({
  title: selectStoryTitle(),
  initialStitchName: selectInitialStitchName()
})

function mapDispatchToProps(dispatch) {
  return {
    onStartClick: stitchName => {
      dispatch(setCurrentStitch(stitchName))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TitlePage)
