/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('TestOneCtrl', function () {
  var ctrl;

  beforeEach(module('home'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('TestOneCtrl');
  }));

  it('should have ctrlName as TestOneCtrl', function () {
    expect(ctrl.ctrlName).toEqual('TestOneCtrl');
  });

});
