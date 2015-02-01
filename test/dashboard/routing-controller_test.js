/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('RoutingCtrl', function () {
  var ctrl;

  beforeEach(module('dashboard'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('RoutingCtrl');
  }));

  it('should have ctrlName as RoutingCtrl', function () {
    expect(ctrl.ctrlName).toEqual('RoutingCtrl');
  });

});
