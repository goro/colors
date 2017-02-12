import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import expectJSX from 'expect-jsx'
expect.extend(expectJSX)
import { describe, beforeEach, it } from 'mocha'
import PreviewListElement from '../../lib/javascripts/components/PreviewListElement.jsx'

describe('PreviewListElement', () => {
  let addColor
  let renderer

  beforeEach(() => {
    addColor = function () {}
    renderer = TestUtils.createRenderer()
  })

  it('has current class name if current', () => {
    renderer.render(
      <PreviewListElement currentColor='336699' value='336699' addColor={addColor} />
    )

    let actual = renderer.getRenderOutput().props.className
    let expected = 'current-color swatch'

    expect(actual).toEqual(expected)
  })

  it('has current default class name', () => {
    renderer.render(
      <PreviewListElement currentColor='FF33CC' value='336699' addColor={addColor} />
    )

    let actual = renderer.getRenderOutput().props.className
    let expected = ' swatch'

    expect(actual).toEqual(expected)
  })

  it('has correct style background', () => {
    renderer.render(
      <PreviewListElement currentColor='FF33CC' value='336699' addColor={addColor} />
    )

    let actual = renderer.getRenderOutput().props.style
    let expected = { backgroundColor: '#336699' }

    expect(actual).toEqual(expected)
  })

  it('has correct value', () => {
    renderer.render(
      <PreviewListElement currentColor='FF33CC' value='336699' addColor={addColor} />
    )

    let actual = renderer.getRenderOutput()
    let expected = '#336699'

    expect(actual).toIncludeJSX(expected)
  })
})
