import React from 'react'

export default class FizzBuzz extends React.Component{
  render(){
    const {text} = this.props
    return(
      <canvas id="fbCanvas" 
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='100px' width='370px'><text x='0' y='60' fill='rgb(44,46,65)' stroke='#2C2E3F' font-size='70' font-family='Roboto'>${text}</text></svg>")`,
          backgroundRepeat: 'round',
          position: 'absolute',
          height: '100%',
          width: '$100%',
          zIndex: -1}} 
      />
    )
  }   
}