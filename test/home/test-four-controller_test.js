/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('TestFourCtrl', function () {
  var ctrl;

  beforeEach(module('home'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('TestFourCtrl');
  }));

  it('should have ctrlName as TestFourCtrl', function () {
    expect(ctrl.ctrlName).toEqual('TestFourCtrl');
  });

});
