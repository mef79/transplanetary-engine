/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react'
import { FormattedMessage } from 'react-intl'
import messages from './messages'
// import $ from 'jquery'
// import Anime from 'react-anime'
// import anime from 'animejs'
export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
  //   const timelineParameters = Anime.timeline({
  //     direction: 'alternate',
  //     loop: true
  //   })

  //   timelineParameters
  //     .add({
  //       targets: '.green',
  //       translateX: [{ value: 80 }, { value: 160 }, { value: 250 }],
  //       translateY: [{ value: 30 }, { value: 60 }, { value: 60 }],
  //       duration: 3000
  //     })
  //     .add({
  //       targets: '.red',
  //       translateX: [{ value: 80 }, { value: 160 }, { value: 250 }],
  //       translateY: [{ value: 30 }, { value: -30 }, { value: -30 }],
  //       duration: 3000,
  //       offset: 200
  //     })
  //     .add({
  //       targets: 'blue',
  //       translateX: [{ value: 80 }, { value: 250 }],
  //       translateY: [{ value: -60 }, { value: -30 }, { value: -30 }],
  //       duration: 3000,
  //       offset: 400
  //     })
    const divStyle = {
      marginTop: '50px',
      height: '100%',
      width: '100%',
    }
    const redStyle = {
      backgroundColor: 'red',
      borderRadius: '50px',
      padding: '2em',
      width: '75px',
    }
    const blueStyle = {
      backgroundColor: 'blue',
      borderRadius: '50px',
      padding: '2em',
      width: '100px',
    }
    const greenStyle = {
      backgroundColor: 'green',
      borderRadius: '50px',
      padding: '2em',
      width: '100px',
    }
    return (
      <div style={divStyle}>
        <FormattedMessage {...messages.header} />
        <div className="blue" style={blueStyle} />
        <div className="red" style={redStyle} />
        <div className="green" style={greenStyle} />
      </div>
    )
  }
}
