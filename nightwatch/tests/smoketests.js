this.smokeTest = function (browser) {
  browser.init()
    .waitForElementPresent('body', 5000)
    .end()
}
