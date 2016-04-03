import { connect } from 'react-redux'
import { addColor, removeColor, setCurrentColor } from '../actions'
import App from '../components/app'

let mapDispatchToProps = (dispatch) => {
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

let mapStateToProps = (state) => {
  return {
    selectedColors: state.color.selectedColors,
    currentColor: state.color.currentColor
  }
}

let Main = connect(mapStateToProps, mapDispatchToProps)(App)

export default Main
