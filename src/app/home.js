import React from 'react'

import Response from './response'

export default class Home extends React.Component {
  render() {
    return( 
      <Response
        onClear={() => this.setState({endingValue: null})}
      />
    )
  }
}