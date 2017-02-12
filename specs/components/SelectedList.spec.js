import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)
import { describe, beforeEach, it } from 'mocha'
import SelectedList from '../../lib/javascripts/components/SelectedList.jsx'

describe('SelectedList', () => {
  let renderer
  let colors
  let removeColor

  beforeEach(() => {
    renderer = TestUtils.createRenderer()
    colors = [ '9B6800', 'AF7C00', 'C39000' ]
    removeColor = function () {}
    renderer.render(<SelectedList colors={colors} removeColor={removeColor} />)
  })

  it('should render a list of SelectedItems', () => {
    colors.forEach((color) => {
      const actual = renderer.getRenderOutput()
      const expected = color

      expect(actual).toIncludeJSX(expected)
    })
  })

  it('should render the correct number of child elements', () => {
    const children = renderer.getRenderOutput().props.children
    const actual = children.props.children.length
    const expected = 3

    expect(actual).toEqual(expected)
  })
})
