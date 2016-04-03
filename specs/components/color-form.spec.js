import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import ColorForm from '../../lib/javascripts/components/color-form'

describe('ColorForm', () => {

  it('has the correct value set to input on load', () => {
    let renderer = TestUtils.createRenderer()
    let setCurrentColor = function () {}

    renderer.render(
      <ColorForm setCurrentColor={setCurrentColor} value="CCFF77"></ColorForm>
    )

    let form = renderer.getRenderOutput().props.children
    let p = form.props.children
    let span = p.props.children
    let input = span.props.children[1]
    let actual = input.props.defaultValue
    let expected = 'CCFF77'

    expect(actual).toEqual(expected)
  })

})
