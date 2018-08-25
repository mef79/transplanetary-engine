/*
 *
 * Menu
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { clearLocalStorage } from 'containers/Game/actions'
import styled from 'styled-components'

export class Menu extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    const MenuContainer = styled.div`
      background-color:black;
      display: flex;
      flex-direction:row;
      padding: 5px;
      justify-content: space-between;
      align-items: center;
    `
    return (
      <MenuContainer >
        <span>A Really Great Game Title</span>
        <FontAwesomeIcon
          icon="undo"
          style={{ color: 'white',  cursor: 'pointer' }}
          onClick={this.props.clearLocalStorage}
        />
      </MenuContainer>
    )
  }
}

Menu.propTypes = {
  clearLocalStorage: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
})

function mapDispatchToProps(dispatch) {
  return {
    clearLocalStorage: () => dispatch(clearLocalStorage()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
