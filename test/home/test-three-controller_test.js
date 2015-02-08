/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('TestThreeCtrl', function () {
  var ctrl, scope;

  beforeEach(module('home'));

  beforeEach(inject(function (_$rootScope_, $controller) {
    scope = _$rootScope_;
    ctrl = $controller('TestThreeCtrl', {
      $scope: scope
    });
  }));

  it('should have ctrlName as TestThreeCtrl', function () {
    expect(ctrl.ctrlName).toEqual('TestThreeCtrl');
  });

});
