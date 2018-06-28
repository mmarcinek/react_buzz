import React from 'react'

import Particles from 'react-particles-js'
import particles from '../particles.json'

export default class Bubbles extends React.Component {
  
  // componentWillReceiveProps(newProps){
  //       // const { text } = this.props
  //   if(newProps.text){ 
  //     const newHtml = `<p>${newProps.text}</p>`
  //     let canvas = document.getElementsByClassName('particleCanvas')[0]
  //     console.log(canvas)
  //     canvas.innerHtml = newHtml
  //     console.log(canvas)
  //     // const ctx = canvas[0].getContext('2d')
      
  //     // ctx.font = '30px'
  //     // ctx.fillText(newProps.text, 10, 50)
  //     // console.log(ctx)
      
  //   }
  // }

  render() {
    const { text } = this.props

    return (
      <Particles 
        canvasClassName='particleCanvas'
        params={ particles } 
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='50px' width='120px'><text x='0' y='15' fill='red' font-size='20'>${text}</text></svg>")`,
          position: 'absolute',
          width: 100 + '%',
          height: 100 + '%',
          zIndex: -1,
        }}
      />    
    )
  }
}