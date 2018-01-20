/**
*
* Choice
*
*/

import React, { PropTypes } from 'react'
// import styled from 'styled-components'


class Choice extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  formatStitchContent = content => {
    let updatedContent = content.replace(/\/=/, '<span class="small-caps">')
    updatedContent = updatedContent.replace(/=\//, '</span>')
    updatedContent = updatedContent.replace(/\*-/, '<span class="bold">')
    updatedContent = updatedContent.replace(/-\*/, '</span>')
    return updatedContent
  }

  render() {
    return (
      <li
        onClick={this.props.clickFunc}
        dangerouslySetInnerHTML={{ __html: this.formatStitchContent(this.props.choice.option) }}
      />
    )
  }
}

Choice.propTypes = {
  choice: PropTypes.object.isRequired,
  clickFunc: PropTypes.func.isRequired
}

export default Choice
