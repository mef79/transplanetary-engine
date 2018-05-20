/*
 *
 * Stitch
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import TextFormatter from 'components/TextFormatter'
import { selectFlags } from 'containers/Game/selectors'

export class Stitch extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  setFlagBasedSnippets = content => {
    const flagRegex = /\{(.+?):(.+?)(\|(.+?))?\}/
    const match = flagRegex.exec(content)

    if (match) {
      const wholeExpression = match[0]
      const flagCondition = match[1]
      const ifFlag = match[2]
      const ifNotFlag = match[4] ? match[4] : ''

      const comparisonStrings = ['<=', '>=', '=', '<', '>']

      let comparison
      let flagName = flagCondition
      let flagValue = true

      comparisonStrings.forEach(s => {
        if (flagCondition.indexOf(s) > -1 && !comparison) {
          flagName = flagCondition.split(s)[0].trim()
          flagValue = flagCondition.split(s)[1].trim()
          comparison = s
        }
      })

      const currentFlag = this.props.flags.toJS()[flagName]

      let formattedContent

      if (flagValue === true) {
        formattedContent = currentFlag ? content.replace(wholeExpression, ifFlag) : formattedContent = content.replace(wholeExpression, ifNotFlag)
      }

      else {
        switch (comparison) {
          case '<=':
            formattedContent = currentFlag <= flagValue ? content.replace(wholeExpression, ifFlag) : content.replace(wholeExpression, ifNotFlag)
            break
          case '>=':
            formattedContent = currentFlag >= flagValue ? content.replace(wholeExpression, ifFlag) : content.replace(wholeExpression, ifNotFlag)
            break
          case '=':
            formattedContent = currentFlag === flagValue ? content.replace(wholeExpression, ifFlag) : content.replace(wholeExpression, ifNotFlag)
            break
          case '<':
            formattedContent = currentFlag < flagValue ? content.replace(wholeExpression, ifFlag) : content.replace(wholeExpression, ifNotFlag)
            break
          case '>':
            formattedContent = currentFlag > flagValue ? content.replace(wholeExpression, ifFlag) : content.replace(wholeExpression, ifNotFlag)
            break
          default:
            formattedContent = content
            break
        }
      }

      return this.setFlagBasedSnippets(formattedContent)
    }
    return content
  }

  render() {
    return (
      <div className="stitchContent">
        <TextFormatter content={this.setFlagBasedSnippets(this.props.stitch.get('content').get(0))} />
      </div>
    )
  }
}

Stitch.propTypes = {
  stitch: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  flags: PropTypes.object,
}

const mapStateToProps = createStructuredSelector({
  flags: selectFlags(),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stitch)
