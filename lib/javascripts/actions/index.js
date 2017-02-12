export function addColor (color) {
  return {
    type: 'ADD_COLOR',
    color
  }
}

export function removeColor (color) {
  return {
    type: 'REMOVE_COLOR',
    color
  }
}

export function setCurrentColor (color) {
  return {
    type: 'SET_CURRENT_COLOR',
    color
  }
}
