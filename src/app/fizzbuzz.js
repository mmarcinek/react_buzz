import React from 'react'

export default class FizzBuzz extends React.Component{
  render(){
    const {text} = this.props
    return(
      <div style={{position: 'absolute', zIndex: -1}}>{text}</div>
    )
  }   
}