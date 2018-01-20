/*
 *
 * Choices
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { setCurrentStitch } from 'containers/Game/actions'
import Choice from 'components/Choice'
import makeSelectChoices from './selectors'

class Choices extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  renderChoices = () => {
    const choicesToRender = []
    this.props.choices.forEach(choice =>
      choicesToRender.push(
        <Choice
          key={choice.linkPath}
          choice={choice}
          clickFunc={ event => {
            event.preventDefault()
            this.props.navigateToStitch(choice.linkPath)
          }}
        />
      )
    )
    return choicesToRender
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderChoices()}
        </ul>
      </div>
    )
  }
}

Choices.propTypes = {
  choices: PropTypes.array.isRequired,
  navigateToStitch: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  Choices: makeSelectChoices()
})

function mapDispatchToProps(dispatch) {
  return {
    navigateToStitch: stitchName => {
      dispatch(setCurrentStitch(stitchName))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Choices)
