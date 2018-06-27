import React from 'react'

// import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

export default class Response extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      count: 0
    }
  }

  componentDidMount(){
    this.updateComponent()
  }

  updateComponent(i){
    const newState = {}

    const {count} = this.state
   
    newState.count = 
      i === 'increase' ? count + 1 :
      i === 'decrease' ? count - 1 :
      count

    /* assigning text based on count in ternary made pretty */
    newState.text = 
      newState.count % 15 === 0 ? 'FizzBuzz' : 
      newState.count %  5 === 0 ? 'Buzz'     : 
      newState.count %  3 === 0 ? 'Fizz'     :
      ''
    this.setState(newState)
  }

  onIncrease(){
    this.updateComponent('increase')
  }

  onDecrease(){
    this.updateComponent('decrease')
  }

  render(){
    const { text, count } = this.state
    return (
      <div>    
        <h2>{count}</h2>
        <h2>{ text }</h2>
        <Button variant='outlined' color='primary' onClick={this.onIncrease.bind(this)}>
          +
        </Button>
        <Button variant='outlined' color='primary' onClick={ this.onDecrease.bind(this) }>
          -
        </Button>
      </div>
    )
  }
}