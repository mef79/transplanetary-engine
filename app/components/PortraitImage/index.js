/**
*
* PortraitImage
*
*/

import React, { PropTypes } from 'react'
import styled from 'styled-components'

class PortraitImage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const Portrait = styled.img`
      width:100%;
      height:100%;
    `
    if (this.props.imageUrl && this.props.imageUrl !== 'clear.jpg') {
      return (
        <Portrait src={ this.props.imageUrl } alt="" />
      )
    }
    return null
  }
}

PortraitImage.propTypes = {
  imageUrl: PropTypes.string
}

export default PortraitImage
