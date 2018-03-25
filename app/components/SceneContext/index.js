/**
*
* SceneContext
*
*/

import React from 'react'
import Scene from 'components/Scene'
import Music from 'components/Music'
import BackgroundWrapper from 'components/BackgroundWrapper'
// TODO: This should render children instead of having the scene in it.
class SceneContext extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={ { height: '100vh' } }>
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
