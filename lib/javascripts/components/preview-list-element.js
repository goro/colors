import React from 'react'
import ReactDom from 'react-dom'
import ListElementColor from './list-element-color'

let PreviewListElement = React.createClass({

  addColor: function () {
    this.props.addColor(this.props.value)
  },

  className: function () {
    return this.props.currentColor.toUpperCase() === this.props.value.toUpperCase() ? 'current-color' : ''
  },

  render: function () {
    return (
      <li className={this.className() + ' swatch'} onClick={this.addColor} style={{backgroundColor: '#' + this.props.value}}>
        <span className="color-value-wrapper">
          <ListElementColor value={this.props.value}></ListElementColor>
        </span>
      </li>
    )
  }

})

export default PreviewListElement
