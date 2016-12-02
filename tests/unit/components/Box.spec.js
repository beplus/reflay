/* global describe, it */

import expect from 'expect'
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Box from '../../../src/components/Box'

const renderer = TestUtils.createRenderer()

describe('Box', () => {
  it('Should add classes equals to props', () => {
    renderer.render(<Box flex='auto' order={1} offset={5} hide show />)
    const { type, props: { className } } = renderer.getRenderOutput()
    expect(type).toBe('div')
    expect(className).toContain('flex-auto')
    expect(className).toContain('flex-order-1')
    expect(className).toContain('flex-offset-5')
    expect(className).toContain('hide')
    expect(className).toContain('show')
  })

  it('Should add classes equals to props (flex breakpoints)', () => {
    renderer.render(<Box flex={100}
      flex-xs={90} flex-gt-xs={80}
      flex-sm={70} flex-gt-sm={60}
      flex-md={50} flex-gt-md={40}
      flex-lg={30} flex-gt-lg={20}
      flex-xl={10} />)
    const { type, props: { className } } = renderer.getRenderOutput()
    expect(type).toBe('div')
    expect(className).toContain('flex-100')
    expect(className).toContain('flex-xs-90')
    expect(className).toContain('flex-gt-xs-80')
    expect(className).toContain('flex-sm-70')
    expect(className).toContain('flex-gt-sm-60')
    expect(className).toContain('flex-md-50')
    expect(className).toContain('flex-gt-md-40')
    expect(className).toContain('flex-lg-30')
    expect(className).toContain('flex-gt-lg-20')
    expect(className).toContain('flex-xl-10')
  })

  it('Should add classes equals to props (order breakpoints)', () => {
    renderer.render(<Box order={-20}
      order-xs={-16} order-gt-xs={-12}
      order-sm={-8} order-gt-sm={-4}
      order-md={4} order-gt-md={8}
      order-lg={12} order-gt-lg={16}
      order-xl={20} />)
    const { type, props: { className } } = renderer.getRenderOutput()
    expect(type).toBe('div')
    expect(className).toContain('flex-order--20')
    expect(className).toContain('flex-order-xs--16')
    expect(className).toContain('flex-order-gt-xs--12')
    expect(className).toContain('flex-order-sm--8')
    expect(className).toContain('flex-order-gt-sm--4')
    expect(className).toContain('flex-order-md-4')
    expect(className).toContain('flex-order-gt-md-8')
    expect(className).toContain('flex-order-lg-12')
    expect(className).toContain('flex-order-gt-lg-16')
    expect(className).toContain('flex-order-xl-20')
  })

  it('Should add classes equals to props (offset breakpoints)', () => {
    renderer.render(<Box offset={50}
      offset-xs={45} offset-gt-xs={40}
      offset-sm={35} offset-gt-sm={30}
      offset-md={25} offset-gt-md={20}
      offset-lg={15} offset-gt-lg={10}
      offset-xl={5} />)
    const { type, props: { className } } = renderer.getRenderOutput()
    expect(type).toBe('div')
    expect(className).toContain('flex-offset-50')
    expect(className).toContain('flex-offset-xs-45')
    expect(className).toContain('flex-offset-gt-xs-40')
    expect(className).toContain('flex-offset-sm-35')
    expect(className).toContain('flex-offset-gt-sm-30')
    expect(className).toContain('flex-offset-md-25')
    expect(className).toContain('flex-offset-gt-md-20')
    expect(className).toContain('flex-offset-lg-15')
    expect(className).toContain('flex-offset-gt-lg-10')
    expect(className).toContain('flex-offset-xl-5')
  })

  it('Should add classes equals to props (hide breakpoints)', () => {
    renderer.render(<Box hide
      hide-xs hide-gt-xs
      hide-sm hide-gt-sm
      hide-md hide-gt-md
      hide-lg hide-gt-lg
      hide-xl />)
    const { type, props: { className } } = renderer.getRenderOutput()
    expect(type).toBe('div')
    expect(className).toContain('hide')
    expect(className).toContain('hide-xs')
    expect(className).toContain('hide-gt-xs')
    expect(className).toContain('hide-sm')
    expect(className).toContain('hide-gt-sm')
    expect(className).toContain('hide-md')
    expect(className).toContain('hide-gt-md')
    expect(className).toContain('hide-lg')
    expect(className).toContain('hide-gt-lg')
    expect(className).toContain('hide-xl')
  })

  it('Should add classes equals to props (show breakpoints)', () => {
    renderer.render(<Box show
      show-xs show-gt-xs
      show-sm show-gt-sm
      show-md show-gt-md
      show-lg show-gt-lg
      show-xl />)
    const { type, props: { className } } = renderer.getRenderOutput()
    expect(type).toBe('div')
    expect(className).toContain('show')
    expect(className).toContain('show-xs')
    expect(className).toContain('show-gt-xs')
    expect(className).toContain('show-sm')
    expect(className).toContain('show-gt-sm')
    expect(className).toContain('show-md')
    expect(className).toContain('show-gt-md')
    expect(className).toContain('show-lg')
    expect(className).toContain('show-gt-lg')
    expect(className).toContain('show-xl')
  })

  it('Should not replace class', () => {
    renderer.render(<Box className='foo' flex='nogrow' />)
    const { className } = renderer.getRenderOutput().props
    expect(className).toContain('foo')
    expect(className).toContain('flex-nogrow')
  })

  it('Should support custom tag name', () => {
    renderer.render(<Box flex={50} tagName='p' />)
    expect(renderer.getRenderOutput().type).toBe('p')
  })
})
