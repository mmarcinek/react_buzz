import React from 'react'

// import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

export default class Controls extends React.Component {
  render() {
    const { count, onDecrease, onIncrease } = this.props
    return (
      <div style={{
        width: '25%',
        backgroundColor: 'rgba(255,255,255, .9)',
        position: 'absolute',
        padding: '50px',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        flexDirection: 'column'
      }}>            
        <h2 style={{marginTop: 0}}>{count}</h2>
        <div style={{
          flexDirection: 'row'
        }}>
          <Button variant='outlined' color='primary' onClick={onIncrease}>
            +
          </Button>
          <Button variant='outlined' color='primary' onClick={onDecrease}>
            -
          </Button>
        </div>
      </div>
    )
  }
}