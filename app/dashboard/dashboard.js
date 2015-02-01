(function () {
  'use strict';

  /* @ngdoc object
   * @name dashboard
   * @requires $stateProvider
   *
   * @description
   *
   */
  angular
    .module('dashboard', [
      'ui.router'
    ]);

  angular
    .module('dashboard')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'dashboard/dashboard.tpl.html',
        controller: 'DashboardCtrl as dashboard'
      })
      .state('routing', {
        url: '/routing',
        templateUrl: 'dashboard/routing.tpl.html',
        controller: 'RoutingCtrl as routing'
      });
  }

})();
