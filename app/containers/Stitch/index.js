/*
 *
 * Stitch
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import TextFormatter from 'components/TextFormatter'

export class Stitch extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div id="stitchContent">
        <TextFormatter content={this.props.stitch.get('content').get(0)} />
      </div>
    )
  }
}

Stitch.propTypes = {
  stitch: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({})

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stitch)
