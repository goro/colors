import expect from 'expect'
import { describe, it } from 'mocha'
import ColorReducer from '../../lib/javascripts/reducers/ColorReducer'

describe('ColorReducer', () => {
  describe('default state', () => {
    it('is correct', () => {
      const actual = ColorReducer(undefined, {})
      const expected = {
        currentColor: 'CC0033',
        selectedColors: []
      }

      expect(actual).toEqual(expected)
    })
  })

  describe('SET_CURRENT_COLOR', () => {
    it('sets the current color as currentColor', () => {
      const actual = ColorReducer(undefined, { type: 'SET_CURRENT_COLOR', color: 'FFCC00' })
      const expected = {
        currentColor: 'FFCC00',
        selectedColors: []
      }

      expect(actual).toEqual(expected)
    })

    it('does not set current color as currentColor if new color is invalid', () => {
      const state = {
        currentColor: 'FFCC00',
        selectedColors: []
      }
      const actual = ColorReducer(state, { type: 'SET_CURRENT_COLOR', color: 'Foobar' })
      const expected = {
        currentColor: 'FFCC00',
        selectedColors: []
      }

      expect(actual).toEqual(expected)
    })
  })

  describe('ADD_COLOR', () => {
    it('adds new color to selectedColors', () => {
      const actual = ColorReducer(undefined, { type: 'ADD_COLOR', color: 'CC0033' })
      const expected = {
        currentColor: 'CC0033',
        selectedColors: [ 'CC0033' ]
      }

      expect(actual).toEqual(expected)
    })

    it('does not add color if already presenter', () => {
      const state = { currentColor: 'CC0033', selectedColors: [ 'CC0033' ] }
      const actual = ColorReducer(state, { type: 'ADD_COLOR', color: 'CC0033' })
      const expected = {
        currentColor: 'CC0033',
        selectedColors: [ 'CC0033' ]
      }

      expect(actual).toEqual(expected)
    })

    it('does not add color if invalid', () => {
      const state = { currentColor: 'CC0033', selectedColors: [ 'CC0033' ] }
      const actual = ColorReducer(state, { type: 'ADD_COLOR', color: 'hackzor' })
      const expected = {
        currentColor: 'CC0033',
        selectedColors: [ 'CC0033' ]
      }

      expect(actual).toEqual(expected)
    })
  })

  describe('REMOVE_COLOR', () => {
    it('removes color from selectedColors', () => {
      const state = { currentColor: 'FFCC00', selectedColors: [ 'FF3300', 'CC3399', 'CC9900' ] }
      const actual = ColorReducer(state, { type: 'REMOVE_COLOR', color: 'CC3399' })
      const expected = {
        currentColor: 'FFCC00',
        selectedColors: [ 'FF3300', 'CC9900' ]
      }

      expect(actual).toEqual(expected)
    })
  })
})
