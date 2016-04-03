import React from 'react'
import ListElementColor from './list-element-color'

let SelectedListElement = React.createClass({

  removeColor: function () {
    this.props.removeColor(this.props.value)
  },

  render: function () {
    return (
      <li className="swatch" style={{backgroundColor: '#' + this.props.value}} onClick={this.removeColor}>
        <ListElementColor value={this.props.value}></ListElementColor>
      </li>
    )
  }

})

export default SelectedListElement
