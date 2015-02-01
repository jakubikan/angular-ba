(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name dashboard.controller:RoutingCtrl
   *
   * @description
   *
   */
  angular
    .module('dashboard')
    .controller('RoutingCtrl', RoutingCtrl);

  function RoutingCtrl() {
    var vm = this;
    vm.ctrlName = 'RoutingCtrl';
  }

})();
