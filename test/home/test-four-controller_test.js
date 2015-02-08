/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('TestFourCtrl', function () {
  var ctrl, scope;

  beforeEach(module('home'));

  beforeEach(inject(function (_$rootScope_, $controller) {
    scope = _$rootScope_;
    ctrl = $controller('TestFourCtrl', {
      $scope: scope
    });
  }));

  it('should have ctrlName as TestFourCtrl', function () {
    expect(ctrl.ctrlName).toEqual('TestFourCtrl');
  });
  it('should have names array set correctly', function () {
    expect(scope.names).toEqual([
        'Hippolyta',
        'Mária',
        'Adil'
      ]
    );
  });
});
