/*
 *
 * Choices
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { setCurrentContext } from 'containers/Game/actions'
import { selectOptions } from 'containers/Game/selectors'
import Choice from 'components/Choice'

class Choices extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  choiceList = {
    listStyle : 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
    justifyContent: 'center',
    width: '100%'
  }

  renderChoices = () => {
    const choicesToRender = []
    this.props.options.forEach(choice => {
      const choiceObject = choice.toJS()
      choicesToRender.push(
        <Choice
          key={choiceObject.linkPath}
          choice={choiceObject}
          clickFunc={ event => {
            event.preventDefault()
            this.props.navigateToStitch(choiceObject.linkPath)
          }}
        />
      )
    })
    return choicesToRender
  }

  render() {
    return (
      <div>
        <div style={this.choiceList}>
          {this.renderChoices()}
        </div>
      </div>
    )
  }
}

Choices.propTypes = {
  options: PropTypes.object.isRequired,
  navigateToStitch: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  options: selectOptions()
})

function mapDispatchToProps(dispatch) {
  return {
    navigateToStitch: stitchName => {
      dispatch(setCurrentContext(stitchName))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Choices)
