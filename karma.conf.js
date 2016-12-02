// retrieve args
const argv = require('minimist')(process.argv.slice(2))
const TRAVIS = process.env.TRAVIS
// code coverage on by default on TRAVIS, or activated by flag --coverage
const COVERAGE = argv.coverage === true || TRAVIS

// the following env vars are used in webpack.config.js
process.env.UNIT_TEST = true

const webpackConfig = require('./webpack.config.test')
const log = require('npmlog')
log.level = 'silly'

const plugins = [
  'karma-webpack',
  'karma-sinon',
  'karma-mocha',
  'karma-mocha-reporter',
  'karma-sourcemap-loader',
  'karma-chrome-launcher',
  'karma-phantomjs-launcher'
]

const reporters = ['mocha']

// default coverage reporter (we may want different reporters between local & CI)
let coverageReporter = {
  reporters: [
    {type: 'lcov', dir: './build/reports/coverage'}
  ]
}

if (COVERAGE) {
  log.info('karma', 'COVERAGE mode enabled')
  reporters.push('coverage')
  plugins.push('karma-coverage')
}
if (COVERAGE && TRAVIS) {
  log.info('karma', 'TRAVIS mode - will send coverage reports to coveralls.io')
  reporters.push('coveralls')
  plugins.push('karma-coveralls')
  coverageReporter = { type: 'lcovonly', dir: './build/reports/coverage' }
}

module.exports = function karmaConfig (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './node_modules/babel-polyfill/browser.js',
      './tests.webpack.js',
      './test/reactErrors.js' // ,
      // './src/**/*.js'
    ],
    browsers: ['PhantomJS'],
    singleRun: true,
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'] // ,
      // 'src/**/*.js': ['coverage']
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },

    plugins: plugins,

    coverageReporter: coverageReporter,

    reporters: reporters,

    colors: true,
    logLevel: config.LOG_INFO
  })
}
