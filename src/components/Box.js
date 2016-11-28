import React, { PropTypes } from 'react'
import classNames from 'classnames'

// Helpers.
import breakpoints from '../helpers/breakpoints'
import createProps from '../helpers/createProps'

// Flex.
import {
  getPossibleFlexValues,
  getPossibleOrderValues,
  getPossibleOffsetValues
} from '../helpers/box'

/**
 * Prepare Box propTypes.
 * @returns {Object}
 */
const getPropTypes = () => {
  const propTypes = {}

  // Dynamically generated propTypes.
  const dynamicPropTypes = {}
  const breakpointsSpecificProps = {
    flex: PropTypes.oneOf(getPossibleFlexValues()),
    order: PropTypes.oneOf(getPossibleOrderValues()),
    offset: PropTypes.oneOf(getPossibleOffsetValues()),
    hide: PropTypes.bool,
    show: PropTypes.bool
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
    className: PropTypes.string,
    tagName: PropTypes.string,
    children: PropTypes.node
  }

  return Object.assign(propTypes, dynamicPropTypes, otherPropTypes)
}

const propTypes = getPropTypes()

/**
 * Prepare Box defaultProps.
 * @returns {Object}
 */
const getDefaultProps = () => ({
  tagName: 'div'
})

const defaultProps = getDefaultProps()

/**
 * Box component.
 */
const Box = (props) => {
  const classes = []

  classes.push({[`flex-${props['flex']}`]: props['flex']})
  breakpoints.map(breakpoint => {
    classes.push({[`flex-${breakpoint}-${props[`flex-${breakpoint}`]}`]: props[`flex-${breakpoint}`]})
  })

  ;['order', 'offset'].map(prop => {
    classes.push({[`flex-${prop}-${props[prop]}`]: props[prop]})
    breakpoints.map(breakpoint => {
      classes.push({[`flex-${prop}-${breakpoint}-${props[`${prop}-${breakpoint}`]}`]: props[`${prop}-${breakpoint}`]})
    })
  })

  ;['hide', 'show'].map(prop => {
    classes.push({[`${prop}`]: props[prop]})
    breakpoints.map(breakpoint => {
      classes.push({[`${prop}-${breakpoint}`]: props[`${prop}-${breakpoint}`]})
    })
  })

  const className = classNames(props.className, classes)

  return React.createElement(props.tagName, createProps(propTypes, props, className))
}

Box.propTypes = propTypes
Box.defaultProps = defaultProps

export default Box
