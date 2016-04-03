import React from 'react'
import ReactDom from 'react-dom'

let ColorForm = React.createClass({

  handleChange: function (event) {
    this.props.setCurrentColor(event.target.value)
  },

  render: function () {

    return (
      <div>
        <form>
          <p>
            <span className="faux-field">
              # <input autoFocus type="text" ref="textField" onChange={this.handleChange} defaultValue={this.props.value} />
            </span>
          </p>
        </form>
      </div>
    )
  }

})

export default ColorForm
