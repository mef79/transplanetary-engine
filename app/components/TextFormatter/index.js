/**
*
* TextFormatter
*
*/

import React, { PropTypes } from 'react'
// import styled from 'styled-components'


class TextFormatter extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  formatContent = content => {
    let updatedContent = content.replace(/\/=/, '<span class="small-caps">')
    updatedContent = updatedContent.replace(/=\//, '</span>')
    updatedContent = updatedContent.replace(/\*-/, '<span class="bold">')
    updatedContent = updatedContent.replace(/-\*/, '</span>')
    return updatedContent
  }

  render() {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: this.formatContent(this.props.content) }}
      />
    )
  }
}

TextFormatter.propTypes = {
  content: PropTypes.string.isRequired,
}

export default TextFormatter
