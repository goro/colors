import React, { PropTypes } from 'react'
import ListElementColor from './ListElementColor.jsx'

const propTypes = {
  value: PropTypes.string,
  removeColor: PropTypes.func
}

function SelectedListElement ({ value, removeColor }) {
  function removeColorFromColors () {
    removeColor(value)
  }

  function formattedStyle () {
    return {
      backgroundColor: `#${value}`
    }
  }

  return (
    <li className='Swatch' style={formattedStyle()} onClick={removeColorFromColors}>
      <ListElementColor value={value} />
    </li>
  )
}

SelectedListElement.propTypes = propTypes

export default SelectedListElement
