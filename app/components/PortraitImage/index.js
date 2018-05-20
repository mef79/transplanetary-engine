/**
*
* PortraitImage
*
*/

import React, { PropTypes } from 'react'

class PortraitImage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.imageUrl && this.props.imageUrl !== 'clear.jpg') {
      return (
        <img src={ this.props.imageUrl } alt="" />
      )
    }
    return null
  }
}

PortraitImage.propTypes = {
  imageUrl: PropTypes.string
}

export default PortraitImage
