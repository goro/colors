import React, { PropTypes } from 'react'
import SelectedListElement from './SelectedListElement.jsx'

const propTypes = {
  colors: PropTypes.array,
  removeColor: PropTypes.func
}

function SelectedList ({ colors, removeColor }) {
  const listElements = colors.map((color, i) => {
    return <SelectedListElement value={color} key={i} removeColor={removeColor} />
  })

  return (
    <div>
      <ul>{listElements}</ul>
    </div>
  )
}

SelectedList.propTypes = propTypes

export default SelectedList
