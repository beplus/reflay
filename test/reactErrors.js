/* eslint-disable no-console */
function treatReactWarningsAsErrors () {
  const error = console.error

  console.error = function reactError (warning) {
    if (/(Invalid prop|Failed propType|Unknown prop)/.test(warning)) {
      throw new Error(warning)
    }
    error.apply(console, arguments)
  }
}
/* eslint-enable no-console */

treatReactWarningsAsErrors()
