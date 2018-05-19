/**
*
* PortraitImage
*
*/

import React, { PropTypes } from 'react'
import styled from 'styled-components'


class PortraitImage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
         <img src={ this.props.imageUrl }/>
      </div>
    )
  }
}

PortraitImage.propTypes = {
  imageUrl: PropTypes.string
}

export default PortraitImage
