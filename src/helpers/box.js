export const FLEX_NONE = 'none'
export const FLEX_INITIAL = 'initial'
export const FLEX_AUTO = 'auto'
export const FLEX_GROW = 'grow'
export const FLEX_NOGROW = 'nogrow'
export const FLEX_NOSHRINK = 'noshrink'

/**
 * Prepare all possible values for flex[-*] props.
 * @returns {Array}
 */
export const getPossibleFlexValues = () => {
  let f = []

  for (let i = 0; i <= 100; i = i + 5) {
    f.push(i)
  }

  f.push(33)
  f.push(66)

  f.push(FLEX_NONE)
  f.push(FLEX_INITIAL)
  f.push(FLEX_AUTO)
  f.push(FLEX_GROW)
  f.push(FLEX_NOGROW)
  f.push(FLEX_NOSHRINK)

  return f
}

/**
 * Prepare all possible values for order[-*] props.
 * @returns {Array}
 */
export const getPossibleOrderValues = () => {
  let o = []

  for (let i = -20; i <= 20; i++) {
    o.push(i)
  }

  return o
}

/**
 * Prepare all possible values for offset[-*] props.
 * @returns {Array}
 */
export const getPossibleOffsetValues = () => {
  let o = []

  for (let i = 0; i <= 100; i = i + 5) {
    o.push(i)
  }

  o.push(33)
  o.push(66)

  return o
}
