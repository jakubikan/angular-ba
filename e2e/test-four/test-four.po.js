/*global element, by*/
'use strict';

var TestFourPage = function () {
  this.text = element(by.tagName('p'));
  this.heading = element(by.tagName('h2'));
};

module.exports = TestFourPage;
