/* global browser, jasmine */

// removing transpilation (babel transformers are messing with protractor config ...)
// require('babel-core/register') // write tests in es6

var SpecReporter = require('jasmine-spec-reporter')
var pkg = require('./package.json')

/**
 * The default port on which the test will be run is the one specified in package.json under config.port
 *
 * To overload this port, just pass the flag --port
 *
 * Use the global goToUrl(relativeUrl) helper (which will use what ever port you defined)
 *
 */
var argv = require('minimist')(process.argv.slice(2))
var PORT = argv.port || (pkg.config ? (pkg.config.port ? pkg.config.port : null) : null) || 3000
var BASE_URL = argv['base-url'] || 'http://localhost'
console.log('[INFOS] Testing on ' + BASE_URL + ':' + PORT)

var specs = [
  'tests/e2e/**/*.spec.js'
]

var config = {
  framework: 'jasmine2',
  specs: specs,
  onPrepare: function () {
    browser.ignoreSynchronization = true

    /**
     * Helper to use instead of directly `browser.get` so that you don't bother about the port
     * baseUrl and port are optional and can be overriden globally when launching protractor
     * with the flags --base-url and --port
     * @param relativeUrl
     * @param baseUrl
     * @param port
     */
    global.goToUrl = function (relativeUrl, baseUrl, port) {
      baseUrl = typeof baseUrl === 'undefined' ? BASE_URL : baseUrl
      port = typeof port === 'undefined' ? PORT : port
      return browser.get(baseUrl + ':' + port + relativeUrl)
    }

    global.waitUntilIsElementPresent = function (element, timeout) {
      timeout = typeof timeout !== 'undefined' ? timeout : 4000
      return browser.driver.wait(() => {
        return browser.driver.isElementPresent(element)
      }, timeout)
    }

    jasmine.getEnv().addReporter(new SpecReporter())
  }
}

if (process.env.TRAVIS) {
  config.sauceUser = process.env.SAUCE_USERNAME
  config.sauceKey = process.env.SAUCE_ACCESS_KEY

  // You can configure platforms here: https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
  config.multiCapabilities = [{
    'name': `reflay #${process.env.TRAVIS_BUILD_NUMBER}: MS EDGE v13.10586 on Windows 10`,
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'platform': 'Windows 10',
    'browserName': 'MicrosoftEdge',
    'version': '13.10586',
    'recordVideo': false
  }, {
    'name': `reflay #${process.env.TRAVIS_BUILD_NUMBER}: Safari v10.0 on OS X 10.11`,
    'tunnel-identifier': process.env.TRAVIS_JOB_NUMBER,
    'build': process.env.TRAVIS_BUILD_NUMBER,
    'platform': 'OS X 10.11',
    'browserName': 'safari',
    'version': '10.0',
    'recordVideo': false
  }]
}

module.exports.config = exports.config = config
