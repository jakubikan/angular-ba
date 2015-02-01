/*global describe, beforeEach, it, browser, expect */
'use strict';

var buildConfigFile = require('findup-sync')('build.config.js')
  , buildConfig = require(buildConfigFile)
  , TestFourPagePo = require('./test-four.po');

describe('Test four page', function () {
  var testFourPage;

  beforeEach(function () {
    testFourPage = new TestFourPagePo();
    browser.driver.get(buildConfig.host + ':' + buildConfig.port + '/#/test-four');
  });

  it('should say TestFourCtrl', function () {
    expect(testFourPage.heading.getText()).toEqual('testFour');
    expect(testFourPage.text.getText()).toEqual('TestFourCtrl');
  });
});
