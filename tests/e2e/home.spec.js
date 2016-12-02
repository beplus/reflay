/* global describe, it, expect, browser, beforeEach, goToUrl */

describe('Homepage', () => {
  // before each 'it' of the following describe:
  beforeEach(() => {
    // go to page (if not yet)
    goToUrl('/')
  })

  it('Should have a correct title', () => {
    expect(browser.getTitle()).toEqual('reflay spec')
  })
})
