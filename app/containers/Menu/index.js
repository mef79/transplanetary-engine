/*
 *
 * Menu
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { setVolume } from 'containers/App/actions'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { clearLocalStorage } from 'containers/Game/actions'

export class Menu extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleChange = val => {
    this.props.setVolume(val)
  }

  render() {
    return (
      <div style={{ height: '30px', backgroundColor: 'gray', paddingRight: '10px', textAlign: 'right' }}>
        <FontAwesomeIcon icon="volume-up" style={{ verticalAlign: 'top', marginTop: '7px', color: 'darkgray' }} />
        <div style={{ display: 'inline-block', width: '300px', padding: '9px' }}>
          <Slider
            trackStyle={{ backgroundColor: 'darkgray' }}
            handleStyle={{
              borderColor: 'darkgray',
              backgroundColor: 'gray',
            }}
            defaultValue={10}
            min={0}
            max={10}
            onChange={this.handleChange}
          />
        </div>
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
  setVolume: PropTypes.func.isRequired,
  clearLocalStorage: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({
})

function mapDispatchToProps(dispatch) {
  return {
    setVolume: volume => {
      dispatch(setVolume(volume))
    },
    clearLocalStorage: () => dispatch(clearLocalStorage()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
