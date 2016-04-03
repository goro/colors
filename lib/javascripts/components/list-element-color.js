import React from 'react'

let ListElementColor = React.createClass({

  preventClick: function (event) {
    event.stopPropagation();
  },

  render: function () {
    return (
      <span className="color-value" onClick={this.preventClick}>#{this.props.value}</span>
    )
  }

})

export default ListElementColor
