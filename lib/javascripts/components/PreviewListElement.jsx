import React, { PropTypes } from 'react'
import ListElementColor from './ListElementColor.jsx'

const propTypes = {
  value: PropTypes.string,
  currentColor: PropTypes.string,
  addColor: PropTypes.func
}

function PreviewListElement ({ value, currentColor, addColor }) {
  function addColorToColors () {
    addColor(value)
  }

  function formattedClassName () {
    const formattedColor = currentColor.toUpperCase() === value.toUpperCase() ? 'Preview-currentColor' : ''
    return `${formattedColor} Swatch`
  }

  function formattedStyle () {
    return {
      backgroundColor: `#${value}`
    }
  }

  return (
    <li className={formattedClassName()} onClick={addColorToColors} style={formattedStyle()}>
      <span className='Preview-colorValueWrapper'>
        <ListElementColor value={value} />
      </span>
    </li>
  )
}

PreviewListElement.propTypes = propTypes

export default PreviewListElement
