/*global describe, beforeEach, it, browser, expect */
'use strict';

var buildConfigFile = require('findup-sync')('build.config.js')
  , buildConfig = require(buildConfigFile)
  , RoutingPagePo = require('./routing.po');

describe('Routing page', function () {
  var routingPage;

  beforeEach(function () {
    routingPage = new RoutingPagePo();
    browser.driver.get(buildConfig.host + ':' + buildConfig.port + '/#/routing');
  });

  it('should say RoutingCtrl', function () {
    expect(routingPage.heading.getText()).toEqual('routing');
    expect(routingPage.text.getText()).toEqual('RoutingCtrl');
  });
});
