import React from 'react'
import Response from './response'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      endingValue: null
    }
  }

  render() {
    if(this.state.endingValue) {
      return <Response
              endingValue={this.state.endingValue}
              onClear={() => this.setState({endingValue: null})}
              />
    } else {
      return(
        <div>
          <h1>Please enter a value to count to</h1>
        </div>
      )
    }
  }
}