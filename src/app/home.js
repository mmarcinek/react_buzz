import React from 'react'

import Response from './response'

import Particles from 'react-particles-js';
import particles from '../particles.json'

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
        <Particles 
          params={ particles } 
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='50px' width='120px'><text x='0' y='15' fill='red' font-size='20'>${text}</text></svg>")`
          }}
        />    
        <Response 
          count={count}
          onIncrease={() => this.updateComponent('increase')}
          onDecrease={() => this.updateComponent('decrease')}
        />
      </div>
    )
  }
}