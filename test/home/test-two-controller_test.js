/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('TestTwoCtrl', function () {
  var ctrl, scope;

  beforeEach(module('home'));

  beforeEach(inject(function (_$rootScope_, $controller) {
    scope = _$rootScope_;
    ctrl = $controller('TestTwoCtrl', {
      $scope: scope
    });
  }));

  it('should have ctrlName as TestTwoCtrl', function () {
    expect(ctrl.ctrlName).toEqual('TestTwoCtrl');
  });

});
