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

export class Menu extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div style={{ height: '3.5vh', backgroundColor: 'gray', paddingRight: '10px', textAlign: 'right' }}>
        <FontAwesomeIcon
          icon="undo"
          style={{ color: 'darkgray', verticalAlign: 'top', marginTop: '7px', marginLeft: '20px', cursor: 'pointer' }}
          onClick={this.props.clearLocalStorage}
        />
      </div>
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
