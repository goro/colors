import { connect } from 'react-redux'
import { addColor, removeColor, setCurrentColor } from '../actions'
import App from '../components/App.jsx'

const mapDispatchToProps = (dispatch) => {
  return {

    addColor: function (color) {
      dispatch(addColor(color))
    },

    removeColor: function (color) {
      dispatch(removeColor(color))
    },

    setCurrentColor: function (color) {
      dispatch(setCurrentColor(color))
    }

  }
}

const mapStateToProps = (state) => {
  return {
    selectedColors: state.color.selectedColors,
    currentColor: state.color.currentColor
  }
}

const Main = connect(mapStateToProps, mapDispatchToProps)(App)

export default Main
