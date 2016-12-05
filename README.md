# reflay: React Flexbox Layout

[![GitHub version](https://badge.fury.io/gh/beplus%2Freflay.svg)](https://badge.fury.io/gh/beplus%2Freflay)
[![npm version](https://badge.fury.io/js/reflay.svg)](https://badge.fury.io/js/reflay)
[![Build Status](https://travis-ci.org/beplus/reflay.svg)](https://travis-ci.org/beplus/reflay)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![bitHound Overall Score](https://www.bithound.io/github/beplus/reflay/badges/score.svg)](https://www.bithound.io/github/beplus/reflay)
[![Coverage Status](https://coveralls.io/repos/github/beplus/reflay/badge.svg?branch=master)](https://coveralls.io/github/beplus/reflay?branch=master)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://doge.mit-license.org)

`reflay`: **React Flexbox Layout** is a set of [React](https://facebook.github.io/react) components that implements 
CSS3 [Flexbox](http://www.w3.org/TR/css3-flexbox/) and are inspired by the awesome 
[Angular Material](https://material.angularjs.org/latest/layout/introduction) library. It's built with ES6, SASS 
and WebPack and provides sugar to enable developers to more easily create modern, responsive layouts on top of 
CSS3 [Flexbox](http://www.w3.org/TR/css3-flexbox/).

**Reflay** has 2 main React components: `Layout` and `Box`. Using these components `props` as the API provides an easy 
way to set value (eg. `direction='row'`) and helps with **separation of concerns**: Attributes in form of React `props` 
define layout, while CSS classes assign styling.

- Documentation and Demos: [https://beplus.github.io/reflay](https://beplus.github.io/reflay) (still work in progress)
- Example usage: [https://github.com/beplus/reflay-example](https://github.com/beplus/reflay-example)

## Usage
The recommended way to use the library is to integrate it to your WebPack workflow with 
[Babel Loader](https://github.com/babel/babel-loader), [CSS Loader](https://github.com/webpack/css-loader) and
[SASS Loader](https://github.com/jtangelder/sass-loader). A good starting point is 
[reflay-example](https://github.com/beplus/reflay-example).

## Example
Take a look at the official example of using `reflay` in the [reflay-example](https://github.com/beplus/reflay-example) 
repository.

## Installation and Usage
To install the stable version:

```
npm install --save reflay
```

This assumes you are using [npm](https://www.npmjs.com) as your package manager.

Once you have the WebPack workflow ready, you can just require and use the components:
```js
import React from 'react'
import { Layout, Box } from 'reflay'
 
// Do not forget to load SCSS style 
import 'reflay/lib/styles/layout.scss' 
 
React.render(<Layout direction='column' />, document.querySelector('#root'))
```

## API

### `Layout` Component

| Prop          | Allowed values                                                           | Default value --| Breakpoint specific* |
| ------------- | ------------------------------------------------------------------------ |-----------------|:--------------------:|
| `direction`   | `row` or `column`                                                        | `row`           | Yes                  |
| `align`       | `start|center|end|space-around|space-between` `start|center|end|stretch` | `start stretch` | Yes                  |
| `fill`        | `bool`                                                                   |                 | No                   |
| `wrap`        | `bool`                                                                   |                 | No                   |
| `nowrap`      | `bool`                                                                   |                 | No                   |
| `margin`      | `bool`                                                                   |                 | No                   |
| `padding`     | `bool`                                                                   |                 | No                   |

- `direction` - specifies the `Layouts` direction.
- `align` - specifies how `Box` children will be aligned inside the `Layout` container.
- `fill` - forces the `Layout` element to fill its parent container.
- `wrap` - allows `Box` children to wrap within the `Layout` container.
- `nowrap` - do not allow `Box` children to wrap within the `Layout` container.
- `margin` - adds margin around each `Box` child.
- `padding` - adds padding inside each `Box` child.

### `Box` Component

| Prop      | Allowed values                                      | Breakpoint specific* |
| --------- | --------------------------------------------------- |:--------------------:|
| `flex`    | `integer` (increments of 5 for 0% -> 100%, 100%/3)  | Yes                  |
| `order`   | `integer` (values from -20 to 20)                   | Yes                  |
| `offset`  | `integer` (increments of 5 for 0% -> 95%, 100%/3)   | Yes                  |
| `hide`    | `bool`                                              | Yes                  |
| `show`    | `bool`                                              | Yes                  |

- `flex` - defines how the `Box` element will adjust its size with respect to its parent `Layout` container and the other
elements within the container.
- `order` - sets `Box` order position within the `Layout` container.
- `offset` - sets `Box` offset percentage within the `Layout` container.
- `hide` - hide the `Box` elements - responsively with the use of **Breakpoint specific** aliases.
- `show` - show the `Box` elements - responsively with the use of **Breakpoint specific** aliases.

\* **Breakpoint specific**: These Props can be used in combination with the following 
[Responsive UI Breakpoints](https://material.google.com/layout/responsive-ui.html#responsive-ui-breakpoints):

| Breakpoint | MediaQuery (pixel range)                              |                            |
| ---------- | ----------------------------------------------------- |----------------------------|
| `xs`       | '(max-width: **599**px)'                              | _extra small_              |
| `gt-xs`    | '(min-width: **600**px)'                              | _greater than extra small_ |
| `sm`       | '(min-width: **600**px) and (max-width: **959**px)'   | _small_                    |
| `gt-sm`    | '(min-width: **960**px)'                              | _greater than small_       |
| `md`       | '(min-width: **960**px) and (max-width: **1279**px)'  | _medium_                   |
| `gt-md`    | '(min-width: **1280**px)'                             | _greater than medium_      |
| `lg`       | '(min-width: **1280**px) and (max-width: **1919**px)' | _large_                    |
| `gt-lg`    | '(min-width: **1920**px)'                             | _greater than large_       |
| `xl`       | '(min-width: **1920**px)'                             | _extra large_              |

resulting in the following `props` _(just a few examples)_:
- `direction-xs="row"` - specify `row` direction for `xs` viewport.
- `direction-gt-xs="column"` - specify `column` direction for `gt-xs` viewport.
- `align-sm="start start"` - `start start` align type for `sm` viewport.
- `align-gt-sm="start end"` - `start end` align type for `gt-sm` viewport.
- `flex-md={50}` - 50 % size of the parent container for `md` viewport. 
- `flex-gt-md={75}` - 75 % size of the parent container for `gt-md` viewport.
- `order-lg={1}` - specify `order` value of `1` for `lg` viewport.
- `order-gt-lg={2}` - specify `order` value of `2` for `gt-lg` viewport.
- `offset-md={10}` - set 10 % `offset` for `md` viewport. 
- `offset-gt-md={5}` - set 5 % `offset` for `gt-md` viewport.
- `hide-sm` - hide the `Box` element for `sm` viewport.
- `hide-gt-sm` - hide the `Box` element for `gt-sm` viewport.
- `show-xs` - show the `Box` element for `xs` viewport.
- `show-gt-xs` - show the `Box` element for `gt-xs` viewport.

## Code Snippets
```js
import React from 'react'
import { Layout, Box } from 'reflay'
 
// Do not forget to load SCSS style 
import 'reflay/lib/styles/layout.scss' 
 
// 3 identical sized boxes appear next to each other on devices with viewport of `960px` min.
// 4 boxes stretched in width apper below each other on devices with viewport of `959px` max.
 
const ResponsiveComponent = () => (
  <Layout direction="column" direction-gt-sm="row" align="start stretch" align-gt-sm="center start">
    <Box flex={100} flex-gt-sm={33} order={1}>
      Box #1 - still visible
    </Box>
    <Box flex={100} flex-gt-sm={33} order={2}>
      Box #2 - still visible
    </Box>
    <Box flex={100} flex-gt-sm={33} order={3}>
      Box #3 - still visible
    </Box>
    <Box flex={100} hide-gt-sm order={-1}>
      Box #4 - shown as first and only on devices with up to small viewport size.
    </Box>
  </Layout>
)
 
export default ResponsiveComponent
```

## Contributors
- [Igor Lamoš](https://github.com/igorlamos)

## License
[MIT](http://doge.mit-license.org) © 2016 BePlus s.r.o.

Give us a **star** if `reflay` provides you some value.
