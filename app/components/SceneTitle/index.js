/**
*
* SceneTitle
*
*/

import React from 'react'
import styled from 'styled-components'

import { FormattedMessage } from 'react-intl'
import messages from './messages'

class SceneTitle extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const Header = styled.h3`
      background-color: rgba(255,255,255,.5);
      font-family: 'Josefin Sans';
      font-size:28px
      padding-left:12px;
      padding-right:12px;
      border-radius:20px;
    `
    return (
      <Header>
        <FormattedMessage {...messages.header} />
      </Header>
    )
  }
}

SceneTitle.propTypes = {

}

export default SceneTitle
