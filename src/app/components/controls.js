import React from 'react'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import UpIcon from '@material-ui/icons/ArrowUpward'
import DownIcon from '@material-ui/icons/ArrowDownward'

export default class Controls extends React.Component {
  render() {
    const { count, onDecrease, onIncrease, onReset } = this.props
    return (
      <section 
        style={styles.container}> 
        <Typography 
          style={styles.typo} 
          variant="display3" 
          gutterBottom>
            {count}
        </Typography>   
        <div style={styles.btnGroup}>
        <Button        
            style={styles.down} 
            variant='contained' 
            color='secondary' 
            onClick={onDecrease}>
              <DownIcon />
          </Button>
          &nbsp;          
          <Button
            variant='contained' 
            color='primary' 
            onClick={onIncrease}>
              <UpIcon />
          </Button>
        </div>
        <Button style={styles.reset} onClick={onReset}>Reset</Button>
      </section>
    )
  }
}

const styles = {
  container: {
    width: '20%',
    backgroundColor: 'rgba(255,255,255, .75)',
    position: 'absolute',
    padding: '20px',
    borderRadius: '5px',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    flexDirection: 'column'
  },
  typo: {
    marginBottom: '10px'
  },
  btnGroup: {
    flexDirection: 'row'    
  },
  down: {
    backgroundColor: 'rgba(0,0,0, .5)'
  },
  reset: {
    margin: '20px 0 0 0',
    color: '#636366'
  }
}
