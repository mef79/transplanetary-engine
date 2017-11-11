/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes } from 'react'
import { instanceOf } from 'prop-types'
import { connect } from 'react-redux'
import { withCookies, Cookies } from 'react-cookie'
import { createStructuredSelector } from 'reselect'
import { setSavedData, setCookies } from './actions'

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.setSavedData(this.props.cookies.get('savedData'))
    this.props.setCookies(this.props.cookies)
  }

  render() {
    return (
      <div>
        {React.Children.toArray(this.props.children)}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node,
  cookies: instanceOf(Cookies).isRequired,
  setSavedData: PropTypes.func.isRequired,
  setCookies: PropTypes.func.isRequired,
}

const mapStateToProps = createStructuredSelector({})

function mapDispatchToProps(dispatch) {
  return {
    setSavedData: savedData => dispatch(setSavedData(savedData)),
    setCookies: cookies => dispatch(setCookies(cookies)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withCookies(App))
