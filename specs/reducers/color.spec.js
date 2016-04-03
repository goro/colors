import ColorReducer from '../../lib/javascripts/reducers/color'
import expect from 'expect'

describe('ColorReducer', () => {

  describe('default state', () => {
    it('is correct', () => {
      let actual = ColorReducer(undefined, {})
      let expected = {
        currentColor: 'CC0033',
        selectedColors: []
      }

      expect(actual).toEqual(expected)
    })
  })

  describe('SET_CURRENT_COLOR', () => {
    it('sets the current color as currentColor', () => {
      let actual = ColorReducer(undefined, { type: 'SET_CURRENT_COLOR', color: 'FFCC00' })
      let expected = {
        currentColor: 'FFCC00',
        selectedColors: []
      }

      expect(actual).toEqual(expected)
    })

    it('does not set current color as currentColor if new color is invalid', () => {
      let actual = ColorReducer(undefined, { type: 'SET_CURRENT_COLOR', color: 'Foobar' })
      let expected = {
        currentColor: 'FFCC00',
        selectedColors: []
      }
    })
  })

  describe('ADD_COLOR', () => {
    it('adds new color to selectedColors', () => {
      let actual = ColorReducer(undefined, { type: 'ADD_COLOR', color: 'CC0033' })
      let expected = {
        currentColor: 'CC0033',
        selectedColors: [ 'CC0033' ]
      }

      expect(actual).toEqual(expected)
    })

    it('does not add color if already presenter', () => {
      let state = { currentColor: 'CC0033', selectedColors: [ 'CC0033' ] }
      let actual = ColorReducer(state, { type: 'ADD_COLOR', color: 'CC0033' })
      let expected = {
        currentColor: 'CC0033',
        selectedColors: [ 'CC0033' ]
      }

      expect(actual).toEqual(expected)
    })

    it('does not add color if invalid', () => {
      let state = { currentColor: 'CC0033', selectedColors: [ 'CC0033' ] }
      let actual = ColorReducer(state, { type: 'ADD_COLOR', color: 'hackzor' })
      let expected = {
        currentColor: 'CC0033',
        selectedColors: [ 'CC0033' ]
      }

      expect(actual).toEqual(expected)
    })
  })

  describe('REMOVE_COLOR', () => {
    it('removes color from selectedColors', () => {
      let state = { currentColor: 'FFCC00', selectedColors: [ 'FF3300', 'CC3399', 'CC9900' ]}
      let actual = ColorReducer(state, { type: 'REMOVE_COLOR', color: 'CC3399' })
      let expected = {
        currentColor: 'FFCC00',
        selectedColors: [ 'FF3300', 'CC9900' ]
      }

      expect(actual).toEqual(expected)
    })
  })

})
