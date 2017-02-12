export default buildPalette

function buildPalette (hexColor) {
  const STRENGTH = 20
  const RANGE = 100

  if (!hexColor) return []

  const rgb = convertToRgb(hexColor)

  const colors = []

  for (let i = RANGE; i > 0; i -= STRENGTH) {
    colors.push(darkenRgb(rgb, i))
  }

  for (let i = 0; i < RANGE + 10; i += STRENGTH) {
    colors.push(lightenRgb(rgb, i))
  }

  const hexColors = colors.map((color) => convertToHex(color))

  const uniqueHexColors = unique(hexColors).map((color) => color.toUpperCase())

  return uniqueHexColors
}

function convertToRgb (hex) {
  const chars = hex.split('')
  const sets = [ `${chars[0]}${chars[1]}`, `${chars[2]}${chars[3]}`, `${chars[4]}${chars[5]}` ]
  const color = sets.map((set) => parseInt(set, 16))

  return color
}

function convertToHex (rgb) {
  const hex = rgb.map((int) => {
    const str = (int).toString(16)

    if (str.length === 1) {
      return `0${str}`
    }

    return str
  })

  return hex.join('')
}

function darkenRgb (color, level) {
  return color.map(val => {
    const newLevel = val - level

    return newLevel < 0 ? 0 : newLevel
  })
}

function lightenRgb (color, level) {
  return color.map(val => {
    const newLevel = val + level

    return newLevel > 255 ? 255 : newLevel
  })
}

function unique (items) {
  return items.reduce((list, item) => {
    if (list.indexOf(item) === -1) {
      list.push(item)
    }

    return list
  }, [])
}
