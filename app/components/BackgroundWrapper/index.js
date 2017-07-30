/**
*
* BackgroundWrapper
*
*/

import React from 'react'
import styled from 'styled-components'
import TestBackground from 'images/testbg.jpg'

class BackgroundWrapper extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const Background = styled.div`
      background: url(${TestBackground}) no-repeat center center fixed;
      background-size: cover;
      height: 100vh;
      padding-top:1em;

    `
    return (
      <Background>
        {React.Children.toArray(this.props.children)}
      </Background>
    )
  }
}

BackgroundWrapper.propTypes = {
  children: React.PropTypes.node
}

export default BackgroundWrapper
