/*global describe, beforeEach, it, browser, expect */
'use strict';

var buildConfigFile = require('findup-sync')('build.config.js')
  , buildConfig = require(buildConfigFile)
  , DashboardPagePo = require('./dashboard.po');

describe('Dashboard page', function () {
  var dashboardPage;

  beforeEach(function () {
    dashboardPage = new DashboardPagePo();
    browser.driver.get(buildConfig.host + ':' + buildConfig.port + '/#/dashboard');
  });

  it('should say DashboardCtrl', function () {
    expect(dashboardPage.heading.getText()).toEqual('dashboard');
    expect(dashboardPage.text.getText()).toEqual('DashboardCtrl');
  });
});
