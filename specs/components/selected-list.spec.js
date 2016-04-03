import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)
import SelectedList from '../../lib/javascripts/components/selected-list'

describe('SelectedList', () => {
  let renderer
  let colors
  let removeColor

  beforeEach(() => {
    renderer = TestUtils.createRenderer()
    colors = [ '9B6800', 'AF7C00', 'C39000' ]
    removeColor = function () {}
    renderer.render(<SelectedList colors={colors} removeColor={removeColor}></SelectedList>)
  })

  it('should render a list of SelectedItems', () => {
    colors.forEach((color) => {
      let actual = renderer.getRenderOutput()
      let expected = color

      expect(actual).toIncludeJSX(expected)
    })
  })

  it('should render the correct number of child elements', () => {
    let children = renderer.getRenderOutput().props.children
    let actual = children.props.children.length
    let expected = 3

    expect(actual).toEqual(expected)
  })

})
