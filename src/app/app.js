import React from 'react'

import Controls from './controls'
import FizzBuzz from './fizzbuzz'

export default class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 1
    }
  }

  componentDidMount() {
    this.updateComponent()
  }

  updateComponent(i) {
    const newState = {}

    const { count } = this.state

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

  render() {
    const { text, count } = this.state
    
    return (
      <div>
        <FizzBuzz
          text={text}
        />
        <Controls 
          count={count}
          onIncrease={() => this.updateComponent('increase')}
          onDecrease={() => this.updateComponent('decrease')}
        />
      </div>
    )
  }
}