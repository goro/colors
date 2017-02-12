import React, { PropTypes } from 'react'
import PreviewListElement from './PreviewListElement.jsx'
import buildPalette from '../utilities/buildPalette'

const propTypes = {
  currentColor: PropTypes.string,
  addColor: PropTypes.func
}

function PreviewList ({ currentColor, addColor }) {
  const colors = buildPalette(currentColor)
  const listItems = colors.map((color, i) => {
    return <PreviewListElement currentColor={currentColor} value={color} key={i} addColor={addColor} />
  })

  return (
    <ul>
      {listItems}
    </ul>
  )
}

PreviewList.propTypes = propTypes

export default PreviewList
