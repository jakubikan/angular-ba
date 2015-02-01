/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('TestTwoCtrl', function () {
  var ctrl;

  beforeEach(module('home'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('TestTwoCtrl');
  }));

  it('should have ctrlName as TestTwoCtrl', function () {
    expect(ctrl.ctrlName).toEqual('TestTwoCtrl');
  });

});
