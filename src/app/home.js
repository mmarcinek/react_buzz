import React from 'react'

import Response from './response'
import TextField from '@material-ui/core/TextField'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      endingValue: null
    }
  }

  fizzTheBuzz() {
    let count = document.getElementById('countToThis').value

    this.setState({endingValue: count})
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
          <TextField
            id='countToThis'
            margin='normal'
          />
          <Button variant='outlined' color='primary' onClick={this.fizzTheBuzz.bind(this)}>
            Let's do this!
          </Button>
        </div>
      )
    }
  }
}