/**
*
* Choice
*
*/

import React, { PropTypes } from 'react'
import styled from 'styled-components'


class Choice extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
 // choiceStyle = {
 //   backgroundColor:'#000e',
   // color:'white',
 //   padding:'1em',
  //  width:'100%',
  //  marginBottom:'10px'
//  }


  formatStitchContent = content => {
    let updatedContent = content.replace(/\/=/, '<span class="small-caps">')
    updatedContent = updatedContent.replace(/=\//, '</span>')
    updatedContent = updatedContent.replace(/\*-/, '<span class="bold">')
    updatedContent = updatedContent.replace(/-\*/, '</span>')
    return updatedContent
  }

  render() {
    const Selection = styled.div`
      color: white;
    `
    if (this.props.choice) {
      return (
        <Selection
          onClick={this.props.clickFunc}
          dangerouslySetInnerHTML={{ __html: this.formatStitchContent(this.props.choice.option) }}
        />
      )
    }
    return (
      <Selection onClick={this.props.clickFunc} >
        { this.props.text }
      </Selection>
    )
  }
}

Choice.propTypes = {
  text: PropTypes.string,
  choice: PropTypes.object,
  clickFunc: PropTypes.func.isRequired
}

export default Choice
