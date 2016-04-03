import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)
import PreviewList from '../../lib/javascripts/components/preview-list'

describe('PreviewList', () => {

  it('renders the correct number of child elements', () => {
    let renderer = TestUtils.createRenderer()
    renderer.render(
      <PreviewList currentColor='CC4400'></PreviewList>
    )

    let actual = renderer.getRenderOutput().props.children.length
    let expected = 11

    expect(actual).toEqual(expected)
  })

})
