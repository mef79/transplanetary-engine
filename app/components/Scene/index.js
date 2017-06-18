/**
*
* Scene
*
*/

import React from 'react'
import styled from 'styled-components'

import { FormattedMessage } from 'react-intl'
import messages from './messages'
import SceneTitle from 'components/SceneTitle'

class Scene extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const SceneContainer = styled.div`
      display: flex;
      justify-content: center;
      align-items: stretch;
    `
    return (
      <SceneContainer>
        <SceneTitle/>
        {React.Children.toArray(this.props.children)}
      </SceneContainer>
    )
  }
}

Scene.propTypes = {
  children: React.PropTypes.node
}

export default Scene
