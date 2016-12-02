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

Using `Layout` and `Box` components `props` as the API provides an easy way to set value (eg. `direction='row'`) and
helps with **separation of concerns**: Attributes in form of React `props` define layout, while CSS classes assign 
styling.

- Documentation and Demos: [https://beplus.github.io/reflay](https://beplus.github.io/reflay) (still work in progress)
- _TODO_ Example usage: [https://github.com/beplus/reflay-example](https://github.com/beplus/reflay-example)

## Usage
The recommended way to use the library is to integrate it to your WebPack workflow with 
[Babel Loader](https://github.com/babel/babel-loader), [CSS Loader](https://github.com/webpack/css-loader) and
[SASS Loader](https://github.com/jtangelder/sass-loader). A good starting point is 
[reflay-example](https://github.com/beplus/reflay-example).

## Example
Take a look at the official example of using `reflay` in the [reflay-example](https://github.com/beplus/reflay-example) 
repository.

## Installation
`reflay`: **React Flexbox Layout** can be installed as an [npm package](https://www.npmjs.com/package/reflay):

```
npm install --save reflay
```

Once you have the WebPack workflow ready, you can just require and use the components:
```js
import React from 'react'
import { Layout, Box } from 'reflay/lib'
 
import 'reflay/lib/styles/layout.scss' 
 
React.render(<Layout direction='column' />, document.querySelector('#root'))
```

## Code Snippets
- _TODO_

## API

### Layout
| Prop          | Allowed values                                                           | Breakpoint specific* |
| ------------- | ------------------------------------------------------------------------ |:--------------------:|
| `direction`   | `row` or `column`                                                        | Yes                  |
| `align`       | `start|center|end|space-around|space-between` `start|center|end|stretch` | Yes                  |
| `fill`        | `bool`                                                                   | No                   |
| `wrap`        | `bool`                                                                   | No                   |
| `nowrap`      | `bool`                                                                   | No                   |
| `margin`      | `bool`                                                                   | No                   |
| `padding`     | `bool`                                                                   | No                   |

### Box
| Prop      | Allowed values                                      | Breakpoint specific* |
| --------- | --------------------------------------------------- |:--------------------:|
| `flex`    | `integer` (increments of 5 for 0% -> 100%, 100%/3)  | Yes                  |
| `order`   | `integer` (values from -20 to 20)                   | Yes                  |
| `offset`  | `integer` (increments of 5 for 0% -> 95%, 100%/3)   | Yes                  |
| `hide`    | `bool`                                              | Yes                  |
| `show`    | `bool`                                              | Yes                  |

\* **Breakpoint specific**: These Props can be used in combination with the following 
[Responsive UI Breakpoints](https://material.google.com/layout/responsive-ui.html#responsive-ui-breakpoints):

| Breakpoint | MediaQuery (pixel range)                              |
| ---------- | ----------------------------------------------------- |
| `xs`       | '(max-width: **599**px)'                              |
| `gt-xs`    | '(min-width: **600**px)'                              |
| `sm`       | '(min-width: **600**px) and (max-width: **959**px)'   |
| `gt-sm`    | '(min-width: **960**px)'                              |
| `md`       | '(min-width: **960**px) and (max-width: **1279**px)'  |
| `gt-md`    | '(min-width: **1280**px)'                             |
| `lg`       | '(min-width: **1280**px) and (max-width: **1919**px)' |
| `gt-lg`    | '(min-width: **1920**px)'                             |
| `xl`       | '(min-width: **1920**px)'                             |

## Contributors
- [Igor Lamoš](https://github.com/igorlamos)

## License
[MIT](http://doge.mit-license.org)
