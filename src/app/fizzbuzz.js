import React from 'react'

export default class FizzBuzz extends React.Component{
  componentWillReceiveProps(nextProps, nextState){
    const {text} = nextProps
   
    console.log(text)
    let canvas = document.getElementById('fbCanvas')
    let context = canvas.getContext('2d')
    context.font = '20pt Calibri';
    context.fillText(text, 0, 50);
  }

  render(){
    return(
      <canvas id="fbCanvas" 
        style={{
          position: 'absolute',
          // width:'100%', 
          // height:'100%', 
          zIndex: -1}} />
    )
  }   
}