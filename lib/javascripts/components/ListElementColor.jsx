import React, { PropTypes } from 'react'

const propTypes = {
  value: PropTypes.string
}

function ListElementColor ({ value }) {
  function preventClick (event) {
    event.stopPropagation()
  }

  return (
    <span className='Swatch-colorValue' onClick={preventClick}>#{value}</span>
  )
}

ListElementColor.propTypes = propTypes

export default ListElementColor
