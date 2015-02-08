/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('HomeCtrl', function () {
  var scope, ctrl;

  beforeEach(module('home'));

  beforeEach(inject(function (_$rootScope_, $controller) {
    scope = _$rootScope_;
    ctrl = $controller('HomeCtrl', {
      $scope: scope
    });
  }));

  it('should have ctrlName as HomeCtrl', function () {
    expect(scope.ctrlName).toEqual('HomeCtrl');
  });

});
