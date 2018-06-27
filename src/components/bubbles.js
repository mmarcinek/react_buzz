import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import DropdownButton from 'react-bootstrap/lib/DropdownButton'
import MenuItem from 'react-bootstrap/lib/MenuItem'

import Icon from './../common/icon'
import colors from '../../lib/colors'

function OverflowMenu ({ onSelect, children }) {
  const style = {
    border: 'none'
  }

  const onDropdownSelect = (eventKey, event) => {
    event.target.blur()
    onSelect && onSelect(eventKey)
  }

  return (
    <ButtonToolbar className='pull-right'>
      <DropdownButton
        bsStyle='default'
        style={style}
        title={<Icon icon='overflow' color={colors.text_secondary} />}
        noCaret
        pullRight
        id='dropdown-no-caret'
        onSelect={onDropdownSelect}>

        {children}

      </DropdownButton>
    </ButtonToolbar>
  )
}

module.exports = {
  OverflowMenu,
  MenuItem
}