export const LAYOUT_ALIGN_START = 'start'
export const LAYOUT_ALIGN_CENTER = 'center'
export const LAYOUT_ALIGN_END = 'end'
export const LAYOUT_ALIGN_SPACE_AROUND = 'space-around'
export const LAYOUT_ALIGN_SPACE_BETWEEN = 'space-between'
export const LAYOUT_ALIGN_STRETCH = 'stretch'

/**
 * Available layout alignments in the direction of layout.
 * @type {Array}
 */
const LayoutAlignmentsInDirection = [
  LAYOUT_ALIGN_START, // default
  LAYOUT_ALIGN_CENTER,
  LAYOUT_ALIGN_END,
  LAYOUT_ALIGN_SPACE_AROUND,
  LAYOUT_ALIGN_SPACE_BETWEEN
]

/**
 * Available layout alignments in the perpendicular direction.
 * @type {Array}
 */
const LayoutAlignmentsPerpendicular = [
  LAYOUT_ALIGN_START,
  LAYOUT_ALIGN_CENTER,
  LAYOUT_ALIGN_END,
  LAYOUT_ALIGN_STRETCH // default
]

/**
 * Get available layout alignment combinations.
 * @returns {Array}
 */
export const getLayoutAligns = () => {
  const layoutAlignments = []

  LayoutAlignmentsInDirection.map(inDirection => {
    layoutAlignments.push(`${inDirection}`)

    LayoutAlignmentsPerpendicular.map(perpendicular => {
      layoutAlignments.push(`${inDirection} ${perpendicular}`)
    })
  })

  return layoutAlignments
}

/**
 * Get layout alignment in the layout direction.
 * Return default one if specified does not match.
 * @param align
 * @returns {string}
 */
const getLayoutAlignInDirection = (align) => {
  return LayoutAlignmentsInDirection.find(v => v === align) ? align : LAYOUT_ALIGN_START
}

/**
 * Get layout alignment in the perpendicular direction.
 * Return default one if specified does not match.
 * @param align
 * @returns {string}
 */
const getLayoutAlignPerpendicular = (align) => {
  return LayoutAlignmentsPerpendicular.find(v => v === align) ? align : LAYOUT_ALIGN_STRETCH
}

/**
 * Get layout alignment combination in the form of CSS class suffix.
 * @param align
 * @returns {string}
 */
const getLayoutAlignClassNameSuffix = (align) => {
  let layout
  let perpendicular = ''

  const alignArr = `${align}`.split(' ')
  layout = alignArr[0]

  if (alignArr.length === 2) {
    perpendicular = alignArr[1]
  }
  return `${getLayoutAlignInDirection(layout)}-${getLayoutAlignPerpendicular(perpendicular)}`
}

/**
 * Get the complete layout alignment CSS class name.
 * @param props
 * @param breakpoint
 * @returns {string}
 */
export const getLayoutAlignClassName = (props, breakpoint = '') => {
  if (breakpoint === '') {
    return typeof props !== 'undefined' && typeof props['align'] !== 'undefined'
      ? `layout-align-${getLayoutAlignClassNameSuffix(props['align'])}`
      : ''
  } else {
    return typeof props !== 'undefined' && typeof props[`align-${breakpoint}`] !== 'undefined'
      ? `layout-align-${breakpoint}-${getLayoutAlignClassNameSuffix(props[`align-${breakpoint}`])}`
      : ''
  }
}
