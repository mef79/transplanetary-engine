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
import * as FontAwesome from 'react-icons/lib/fa'

export class Menu extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleChange = val => {
    this.props.setVolume(val)
  }

  render() {
    return (
      <div style={{ height: '30px', backgroundColor: 'gray', paddingRight: '10px', textAlign: 'right' }}>
        <FontAwesome.FaVolumeUp style={{ verticalAlign: 'top', marginTop: '7px', fill: 'darkgray' }} />
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
      </div>
    )
  }
}

Menu.propTypes = {
  setVolume: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
})

function mapDispatchToProps(dispatch) {
  return {
    setVolume: volume => {
      dispatch(setVolume(volume))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
