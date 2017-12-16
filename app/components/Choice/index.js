/**
*
* Choice
*
*/

import React, { PropTypes } from 'react'
// import styled from 'styled-components'


class Choice extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <li onClick={this.props.clickFunc}>
        {this.props.choice.option}
      </li>
    )
  }
}

Choice.propTypes = {
  choice: PropTypes.object.isRequired,
  clickFunc: PropTypes.func.isRequired
}

export default Choice
