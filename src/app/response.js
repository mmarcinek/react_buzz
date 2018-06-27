import React from 'react'

// import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

export default class Response extends React.Component {
  render() {
    const { count, onDecrease, onIncrease } = this.props
    return (
      <div>            
        <h2>{count}</h2>
        <Button variant='outlined' color='primary' onClick={onIncrease}>
          +
        </Button>
        <Button variant='outlined' color='primary' onClick={onDecrease}>
          -
        </Button>
      </div>
    )
  }
}