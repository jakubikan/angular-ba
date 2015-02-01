/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('TestThreeCtrl', function () {
  var ctrl;

  beforeEach(module('home'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('TestThreeCtrl');
  }));

  it('should have ctrlName as TestThreeCtrl', function () {
    expect(ctrl.ctrlName).toEqual('TestThreeCtrl');
  });

});
