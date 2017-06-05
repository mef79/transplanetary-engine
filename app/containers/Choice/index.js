/*
 *
 * Choice
 *
 */

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { createStructuredSelector } from 'reselect'
import makeSelectChoice from './selectors'
import messages from './messages'

export class Choice extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Choice"
          meta={[
            { name: 'description', content: 'Description of Choice' },
          ]}
        />
        <FormattedMessage {...messages.header} />
      </div>
    )
  }
}

Choice.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = createStructuredSelector({
  Choice: makeSelectChoice()
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Choice)
