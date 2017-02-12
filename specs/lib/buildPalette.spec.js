import expect from 'expect'
import { describe, it } from 'mocha'
import buildPalette from '../../lib/javascripts/utilities/buildPalette'

describe('buildPalette', () => {
  it('should return an array of colors separated by 10% increments', () => {
    const expected = [
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
    const actual = buildPalette('FFCC00')

    expect(actual).toEqual(expected)
  })

  it('should return an array of colors separated by 10% increments with lowercase', () => {
    const expected = [
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
    const actual = buildPalette('ffcc00')

    expect(actual).toEqual(expected)
  })

  it('should return color at 6th spot', () => {
    const expected = 'FFCC00'
    const actual = buildPalette('FFCC00')[5]

    expect(actual).toEqual(expected)
  })

  it('should return 11 colors', () => {
    const expected = 11
    const actual = buildPalette('FFCC00').length

    expect(actual).toEqual(expected)
  })

  it('should return 6 colors with if lightest possible', () => {
    const expected = 6
    const actual = buildPalette('FFFFFF').length

    expect(actual).toEqual(expected)
  })

  it('should return color at last spot if lightest possible', () => {
    const expected = 'FFFFFF'
    const actual = buildPalette('FFFFFF')[5]

    expect(actual).toEqual(expected)
  })

  it('should return 6 colors with if darkest possible', () => {
    const expected = 6
    const actual = buildPalette('000000').length

    expect(actual).toEqual(expected)
  })

  it('should return color at first spot if darkest possible', () => {
    const expected = '000000'
    const actual = buildPalette('000000')[0]

    expect(actual).toEqual(expected)
  })
})
