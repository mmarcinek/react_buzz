import React from 'react'

export default class Response extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      endingValue: this.props.endingValue,
      count: 1
    }
  }

  componentDidMount(){
    const newState = {}

    this.interval = setInterval(() => {
      const {endingValue, count} = this.state      
      if(endingValue >= count){

        // assigning text based on count in ternary made pretty
        newState.text = count % 15 === 0 ? 'FizzBuzz' : 
                        count %  5 === 0 ? 'Buzz'     : 
                        count %  3 === 0 ? 'Fizz'     : 
                        count

        // iterate count state
        newState.count = count + 1
      }

      this.setState(newState)
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render(){
    const { text } = this.state
    return (
      <div>
        <h1>{text}</h1>
      </div>
    )
  }
}