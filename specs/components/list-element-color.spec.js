import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import ListElementColor from '../../lib/javascripts/components/list-element-color'

describe('ListElementColor', () => {

  it('should have the correct text', () => {
    let renderer = TestUtils.createRenderer()
    renderer.render(<ListElementColor value="FFCC00"></ListElementColor>)

    let actual = renderer.getRenderOutput().props.children.join('')
    let expected = '#FFCC00'

    expect(actual).toEqual(expected)
  })

})
