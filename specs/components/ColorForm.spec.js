import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { describe, it } from 'mocha'
import ColorForm from '../../lib/javascripts/components/ColorForm.jsx'

describe('ColorForm', () => {
  it('has the correct value set to input on load', () => {
    const renderer = TestUtils.createRenderer()
    const setCurrentColor = function () {}

    renderer.render(
      <ColorForm setCurrentColor={setCurrentColor} value='CCFF77' />
    )

    const form = renderer.getRenderOutput().props.children
    const p = form.props.children
    const span = p.props.children
    const input = span.props.children[1]
    const actual = input.props.defaultValue
    const expected = 'CCFF77'

    expect(actual).toEqual(expected)
  })
})
