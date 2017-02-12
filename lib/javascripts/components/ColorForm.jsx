import React, { PropTypes } from 'react'

const propTypes = {
  value: PropTypes.string
}

class ColorForm extends React.Component {

  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.props.setCurrentColor(event.target.value)
  }

  render () {
    return (
      <div>
        <form>
          <p>
            <span className='SelectedColors-fauxField'>
              # <input autoFocus type='text' ref='textField' onChange={this.handleChange} defaultValue={this.props.value} />
            </span>
          </p>
        </form>
      </div>
    )
  }

}

ColorForm.propTypes = propTypes

export default ColorForm
