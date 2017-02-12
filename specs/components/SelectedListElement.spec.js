import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)
import { describe, beforeEach, it } from 'mocha'
import SelectedListElement from '../../lib/javascripts/components/SelectedListElement.jsx'

describe('SelectedListElement', () => {
  let renderer
  let removeColor

  beforeEach(() => {
    renderer = TestUtils.createRenderer()
    removeColor = function () {}
    renderer.render(
      <SelectedListElement value='9B6800' key='123' removeColor={removeColor} />
    )
  })

  it('should set style background color to correct color', () => {
    let actual = renderer.getRenderOutput().props.style
    let expected = { backgroundColor: '#9B6800' }

    expect(actual).toEqual(expected)
  })

  it('should set text to color with hash', () => {
    let actual = renderer.getRenderOutput()
    let expected = '#9B6800'

    expect(actual).toIncludeJSX(expected)
  })
})
