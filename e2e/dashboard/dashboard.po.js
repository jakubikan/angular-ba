/*global element, by*/
'use strict';

var DashboardPage = function () {
  this.text = element(by.tagName('p'));
  this.heading = element(by.tagName('h2'));
};

module.exports = DashboardPage;
