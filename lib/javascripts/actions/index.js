export let addColor = (color) => {
  return {
    type: 'ADD_COLOR',
    color
  }
}

export let removeColor = (color) => {
  return {
    type: 'REMOVE_COLOR',
    color
  }
}

export let setCurrentColor = (color) => {
  return {
    type: 'SET_CURRENT_COLOR',
    color
  }
}
