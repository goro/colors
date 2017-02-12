import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)
import { describe, it } from 'mocha'
import PreviewList from '../../lib/javascripts/components/PreviewList.jsx'

describe('PreviewList', () => {
  it('renders the correct number of child elements', () => {
    let renderer = TestUtils.createRenderer()
    renderer.render(
      <PreviewList currentColor='CC4400' />
    )

    let actual = renderer.getRenderOutput().props.children.length
    let expected = 11

    expect(actual).toEqual(expected)
  })
})
