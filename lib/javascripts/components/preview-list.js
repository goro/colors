import React from 'react'
import ReactDom from 'react-dom'
import PreviewListElement from './preview-list-element'
import buildPalette from '../utilities/build-palette'

let PreviewList = React.createClass({

  buildPalette,

  render: function () {
    let currentColor = this.props.currentColor
    let colors = this.buildPalette(currentColor)
    let listItems = colors.map((color, i) => {
      return <PreviewListElement currentColor={this.props.currentColor} value={color} key={i} addColor={this.props.addColor} ></PreviewListElement>
    })

    return (
      <ul>
        {listItems}
      </ul>
    )
  }

})

export default PreviewList
