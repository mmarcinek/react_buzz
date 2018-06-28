import React from 'react'

import Particles from 'react-particles-js'
import particles from '../particles.json'

export default class Bubbles extends React.Component {
  

  render() {
    return (
      <Particles 
        canvasClassName='particleCanvas'
        params={ particles } 
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: -2,
        }}
      />    
    )
  }
}