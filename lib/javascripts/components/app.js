import React from 'react'
import ReactDom from 'react-dom'

import ColorForm from '../components/color-form'
import SelectedList from '../components/selected-list'
import PreviewList from '../components/preview-list'

let App = React.createClass({

  render: function () {

    return (
      <main>
        <section className="selected-colors">
          <ColorForm setCurrentColor={this.props.setCurrentColor} value={this.props.currentColor}></ColorForm>
          <SelectedList colors={this.props.selectedColors} removeColor={this.props.removeColor}></SelectedList>
        </section>
        <section className="preview">
          <PreviewList currentColor={this.props.currentColor} addColor={this.props.addColor} ></PreviewList>
        </section>
      </main>
    )
  }

})

export default App
