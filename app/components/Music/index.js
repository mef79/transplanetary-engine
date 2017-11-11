/**
*
* Music
*
*/

import React from 'react'
import SickBlackSea from 'music/Sickblacksea.mp3'
// import styled from 'styled-components'


class Music extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <audio src={SickBlackSea} autoPlay controls>
      </audio>
    )
  }
}

Music.propTypes = {

}

export default Music
