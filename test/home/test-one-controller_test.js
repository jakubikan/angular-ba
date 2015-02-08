/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('TestOneCtrl', function () {
  var ctrl, scope;

  beforeEach(module('home'));

  beforeEach(inject(function (_$rootScope_, $controller) {
    scope = _$rootScope_;
    ctrl = $controller('TestOneCtrl', {
      $scope: scope
    });
  }));

  it('should have ctrlName as TestOneCtrl', function () {
    expect(ctrl.ctrlName).toEqual('TestOneCtrl');
  });

});
