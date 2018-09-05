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
      width: 50%;
      margin-top:30px;
      margin-bottom:30px;
      box-shadow: 2px 2px 17px 12px rgba(0,0,0,0.34);
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
