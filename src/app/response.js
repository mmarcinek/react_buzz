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
        if(count % 15 === 0){
          newState.text = 'FizzBuzz'
        } else if (count % 5 === 0){
          newState.text = 'Buzz'
        } else if (count % 3 === 0){
          newState.text = 'Fizz'
        } else {
          newState.text = count
        }
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