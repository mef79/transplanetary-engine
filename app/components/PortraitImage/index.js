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
        <div>
          <img src={ this.props.imageUrl } alt="" />
        </div>
      )
    }
    return null
  }
}

PortraitImage.propTypes = {
  imageUrl: PropTypes.string
}

export default PortraitImage
