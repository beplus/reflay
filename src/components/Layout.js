import React, { PropTypes } from 'react'
import classNames from 'classnames'

// Helpers.
import breakpoints from '../helpers/breakpoints'
import createProps from '../helpers/createProps'

// Layout Direction.
import {
  LAYOUT_DIRECTION_ROW, // default layout direction.
  getLayoutDirections
} from '../helpers/Layout/direction'

// Layout Align.
import {
  LAYOUT_ALIGN_START,   // default layout alignment in direction of the layout.
  LAYOUT_ALIGN_STRETCH, // default layout alignment in perpendicular direction.
  getLayoutAligns,
  getLayoutAlignClassName
} from '../helpers/Layout/align'

/**
 * Prepare Layout propTypes.
 * @returns {Object}
 */
const getPropTypes = () => {
  const propTypes = {}

  // Dynamically generated propTypes.
  const dynamicPropTypes = {}
  const breakpointsSpecificProps = {
    direction: PropTypes.oneOf(getLayoutDirections()),
    align: PropTypes.oneOf(getLayoutAligns())
  }

  for (let k of Object.keys(breakpointsSpecificProps)) {
    let v = breakpointsSpecificProps[k]
    propTypes[`${k}`] = v
    breakpoints.map(breakpoint => {
      propTypes[`${k}-${breakpoint}`] = v
    })
  }

  // Other propTypes.
  const otherPropTypes = {
    margin: PropTypes.bool,
    padding: PropTypes.bool,
    fill: PropTypes.bool,
    wrap: PropTypes.bool,
    // Other props.
    className: PropTypes.string,
    tagName: PropTypes.string,
    children: PropTypes.node
  }

  return Object.assign(propTypes, dynamicPropTypes, otherPropTypes)
}

const propTypes = getPropTypes()

/**
 * Prepare Layout defaultProps.
 * @returns {Object}
 */
const getDefaultProps = () => ({
  // Note that 'row' is the default Layout direction if you do not specify a value.
  direction: `${LAYOUT_DIRECTION_ROW}`,
  align: `${LAYOUT_ALIGN_START} ${LAYOUT_ALIGN_STRETCH}`,
  margin: false,
  padding: false,
  fill: false,
  wrap: false,
  tagName: 'div'
})

const defaultProps = getDefaultProps()

/**
 * Layout component.
 */
const Layout = (props) => {
  const classes = []

  classes.push({[`layout-${props['direction']}`]: props['direction']})
  classes.push({[`${getLayoutAlignClassName(props)}`]: props['align']})
  breakpoints.map(breakpoint => {
    classes.push({[`layout-${breakpoint}-${props[`direction-${breakpoint}`]}`]: props[`direction-${breakpoint}`]})
    classes.push({[`${getLayoutAlignClassName(props, breakpoint)}`]: props[`align-${breakpoint}`]})
  })

  classes.push({'layout-margin': props.margin})
  classes.push({'layout-padding': props.padding})
  classes.push({'layout-fill': props.fill})
  classes.push({'layout-wrap': props.wrap})

  const className = classNames(props.className, classes)

  return React.createElement(props.tagName, createProps(propTypes, props, className))
}

Layout.propTypes = propTypes
Layout.defaultProps = defaultProps

export default Layout
