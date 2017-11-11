/*
 *
 * TitlePage
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectStoryTitle, selectInitialStitchName} from '../Game/selectors'

export class TitlePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {this.PropTypes.title}
        {this.PropTypes.initialStitchName}
      </div>
    )
  }
}

TitlePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  initialStitchName: PropTypes.string.isRequired,
}

const mapStateToProps = createStructuredSelector({
  title: selectStoryTitle(),
  initialStitchName: selectInitialStitchName()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TitlePage)
