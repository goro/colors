import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { describe, it } from 'mocha'
import ListElementColor from '../../lib/javascripts/components/ListElementColor.jsx'

describe('ListElementColor', () => {
  it('should have the correct text', () => {
    const renderer = TestUtils.createRenderer()
    renderer.render(<ListElementColor value='FFCC00' />)

    const actual = renderer.getRenderOutput().props.children.join('')
    const expected = '#FFCC00'

    expect(actual).toEqual(expected)
  })
})
