/* global describe, it */

import expect from 'expect'
import { getLayoutAligns, getLayoutAlignClassName } from '../../../../src/helpers/Layout/align'

describe('Layout helpers: align', () => {
  it('Should return all possible Layout align combinations', () => {
    expect(getLayoutAligns()).toEqual([
      'start', 'start start', 'start center', 'start end', 'start stretch',
      'center', 'center start', 'center center', 'center end', 'center stretch',
      'end', 'end start', 'end center', 'end end', 'end stretch',
      'space-around', 'space-around start', 'space-around center', 'space-around end', 'space-around stretch',
      'space-between', 'space-between start', 'space-between center', 'space-between end', 'space-between stretch'
    ])
  })

  it('Should return empty align class name if align prop is not set', () => {
    expect(getLayoutAlignClassName()).toEqual('')
  })

  it('Should return default align class name if align prop is incorrectly set', () => {
    const props = {align: 'incorrectly set'}
    expect(getLayoutAlignClassName(props)).toEqual('layout-align-start-stretch')
  })
})
