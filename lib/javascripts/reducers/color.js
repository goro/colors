let ColorReducer = (state, action) => {
  state = state || {
    currentColor: 'CC0033',
    selectedColors: []
  }

  switch (action.type) {

    case 'SET_CURRENT_COLOR':
      return {
        currentColor: setCurrentColor(state.currentColor, action.color),
        selectedColors: state.selectedColors
      }

    case 'ADD_COLOR':
      return {
        currentColor: state.currentColor,
        selectedColors: addColor(state.selectedColors, action.color)
      }

    case 'REMOVE_COLOR':
      return {
        currentColor: state.currentColor,
        selectedColors: removeColor(state.selectedColors, action.color)
      }

    default:
      return state
  }
}

export default ColorReducer

///////////////////////////////////

function addColor(colors, colorToAdd) {
  if (colorNotPresent(colors, colorToAdd) && colorIsValid(colorToAdd)) {
    return [ ...colors ].concat(colorToAdd)
  }

  return colors
}

function colorIsValid(color) {
  return color.match(/[a-f0-9]{6}/i)
}

function colorNotPresent(colors, color) {
  return colors.indexOf(color) === -1
}

function removeColor(selectedColors, colorToRemove) {
  return selectedColors.reduce((colors, color) => {
    if (color !== colorToRemove) {
      colors.push(color)
    }

    return colors
  }, [])
}

function setCurrentColor(previousColor, newColor) {
  if (colorIsValid(newColor)) {
    return newColor
  }

  return previousColor
}
