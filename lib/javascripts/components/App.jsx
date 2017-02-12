import React, { PropTypes } from 'react'
import ColorForm from './ColorForm.jsx'
import SelectedList from './SelectedList.jsx'
import PreviewList from './PreviewList.jsx'

const propTypes = {
  setCurrentColor: PropTypes.func,
  currentColor: PropTypes.string,
  selectedColors: PropTypes.array,
  addColor: PropTypes.func,
  removeColor: PropTypes.func
}

function App ({ setCurrentColor, currentColor, selectedColors, addColor, removeColor }) {
  return (
    <main>
      <section className='SelectedColors'>
        <ColorForm setCurrentColor={setCurrentColor} value={currentColor} />
        <SelectedList colors={selectedColors} removeColor={removeColor} />
      </section>
      <section className='Preview'>
        <PreviewList currentColor={currentColor} addColor={addColor} />
      </section>
    </main>
  )
}

App.propTypes = propTypes

export default App
