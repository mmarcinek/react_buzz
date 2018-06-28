import React from 'react'

export default class FizzBuzz extends React.Component{
  render(){
    const {text} = this.props
    return(
      <canvas id="fbCanvas" 
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='50px' width='120px'><text x='0' y='15' fill='rgb(255,255,255)' font-size='20' font-family='Helvetica, Arial, sans-serif'>${text}</text></svg>")`,
          position: 'absolute',
          height: '100%',
          width: '$100%',
          zIndex: -1}} />
    )
  }   
}