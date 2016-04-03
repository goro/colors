import React from 'react'
import ReactDom from 'react-dom'
import SelectedListElement from './selected-list-element'

let SelectedList = React.createClass({

  render: function () {
    let colors = this.props.colors
    let listElements = colors.map((color, i) => {
      return <SelectedListElement value={color} key={i} removeColor={this.props.removeColor}></SelectedListElement>
    })

    return (
      <div>
        <ul>{listElements}</ul>
      </div>
    )
  }

})

export default SelectedList
