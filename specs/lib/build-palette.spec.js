import expect from 'expect'
import buildPalette from '../../lib/javascripts/utilities/build-palette'

describe('buildPalette', () => {

  it('should return an array of colors separated by 10% increments', () => {
    let expected = [
      '9B6800',
      'AF7C00',
      'C39000',
      'D7A400',
      'EBB800',
      'FFCC00',
      'FFE014',
      'FFF428',
      'FFFF3C',
      'FFFF50',
      'FFFF64'
    ]
    let actual = buildPalette('FFCC00')

    expect(actual).toEqual(expected)
  })

  it('should return an array of colors separated by 10% increments with lowercase', () => {
    let expected = [
      '9B6800',
      'AF7C00',
      'C39000',
      'D7A400',
      'EBB800',
      'FFCC00',
      'FFE014',
      'FFF428',
      'FFFF3C',
      'FFFF50',
      'FFFF64'
    ]
    let actual = buildPalette('ffcc00')

    expect(actual).toEqual(expected)
  })

  it('should return color at 6th spot', () => {
    let expected = 'FFCC00'
    let actual = buildPalette('FFCC00')[5]

    expect(actual).toEqual(expected)
  })

  it('should return 11 colors', () => {
    let expected = 11
    let actual = buildPalette('FFCC00').length

    expect(actual).toEqual(expected)
  })

  it('should return 6 colors with if lightest possible', () => {
    let expected = 6
    let actual = buildPalette('FFFFFF').length

    expect(actual).toEqual(expected)
  })

  it('should return color at last spot if lightest possible', () => {
    let expected = 'FFFFFF'
    let actual = buildPalette('FFFFFF')[5]

    expect(actual).toEqual(expected)
  })

  it('should return 6 colors with if darkest possible', () => {
    let expected = 6
    let actual = buildPalette('000000').length

    expect(actual).toEqual(expected)
  })

  it('should return color at first spot if darkest possible', () => {
    let expected = '000000'
    let actual = buildPalette('000000')[0]

    expect(actual).toEqual(expected)
  })

})
