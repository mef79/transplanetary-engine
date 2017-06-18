/**
*
* SceneContext
*
*/

import React from 'react'
import styled from 'styled-components'

import { FormattedMessage } from 'react-intl'
import messages from './messages'
import Scene from 'components/Scene'
import Music from 'components/Music'
import BackgroundWrapper from 'components/BackgroundWrapper'

class SceneContext extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {

    return (
      <div>
        <Music />
        <BackgroundWrapper>
          <Scene />
        </BackgroundWrapper>
      </div>
    )
  }
}

SceneContext.propTypes = {

}

export default SceneContext
