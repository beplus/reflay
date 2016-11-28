/* global describe, it */

import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Layout from '../../src/components/Layout'

const renderer = TestUtils.createRenderer()

describe('Layout', () => {
  it('Should add classes equals to props', () => {
    renderer.render(<Layout direction='row' align='center center' margin padding fill wrap />)
    const { type, props: { className } } = renderer.getRenderOutput()
    expect(type).toBe('div')
    expect(className).toContain('layout-row')
    expect(className).toContain('layout-align-center-center')
    expect(className).toContain('layout-margin')
    expect(className).toContain('layout-padding')
    expect(className).toContain('layout-fill')
    expect(className).toContain('layout-wrap')
  })

  it('Should add classes equals to props (direction breakpoints)', () => {
    renderer.render(<Layout direction='row'
      direction-xs='column' direction-gt-xs='row'
      direction-sm='column' direction-gt-sm='row'
      direction-md='column' direction-gt-md='row'
      direction-lg='column' direction-gt-lg='row'
      direction-xl='column' />)
    const { type, props: { className } } = renderer.getRenderOutput()
    expect(type).toBe('div')
    expect(className).toContain('layout-row')
    expect(className).toContain('layout-xs-column')
    expect(className).toContain('layout-gt-xs-row')
    expect(className).toContain('layout-sm-column')
    expect(className).toContain('layout-gt-sm-row')
    expect(className).toContain('layout-md-column')
    expect(className).toContain('layout-gt-md-row')
    expect(className).toContain('layout-lg-column')
    expect(className).toContain('layout-gt-lg-row')
    expect(className).toContain('layout-xl-column')
  })

  it('Should add classes equals to props (align breakpoints)', () => {
    renderer.render(<Layout align='space-around end'
      align-xs='start stretch' align-gt-xs='center end'
      align-sm='start stretch' align-gt-sm='center end'
      align-md='start stretch' align-gt-md='center end'
      align-lg='start stretch' align-gt-lg='center end'
      align-xl='start stretch' />)
    const { type, props: { className } } = renderer.getRenderOutput()
    expect(type).toBe('div')
    expect(className).toContain('layout-align-space-around-end')
    expect(className).toContain('layout-align-xs-start-stretch')
    expect(className).toContain('layout-align-gt-xs-center-end')
    expect(className).toContain('layout-align-sm-start-stretch')
    expect(className).toContain('layout-align-gt-sm-center-end')
    expect(className).toContain('layout-align-md-start-stretch')
    expect(className).toContain('layout-align-gt-md-center-end')
    expect(className).toContain('layout-align-lg-start-stretch')
    expect(className).toContain('layout-align-gt-lg-center-end')
    expect(className).toContain('layout-align-xl-start-stretch')
  })

  it('Should add "layout-row" class if `layout` property is not set', () => {
    renderer.render(<Layout />)
    expect(renderer.getRenderOutput().props.className).toContain('layout-row')
  })

  it('Should add "layout-align-*-stretch" class if `align` property for perpendicular is not set', () => {
    renderer.render(<Layout align='start' />)
    expect(renderer.getRenderOutput().props.className).toContain('layout-align-start-stretch')
  })

  it('Should not replace class', () => {
    renderer.render(<Layout className='foo' direction='column' />)
    const { className } = renderer.getRenderOutput().props
    expect(className).toContain('foo')
    expect(className).toContain('layout-column')
  })

  it('Should support custom tag name', () => {
    renderer.render(<Layout direction='column' align='start stretch' tagName='span' />)

    expect(renderer.getRenderOutput().type).toBe('span')
  })
})
