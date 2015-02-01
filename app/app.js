(function () {
  'use strict';

  /* @ngdoc object
   * @name polymerTest
   * @requires $urlRouterProvider
   *
   * @description
   *
   */
  angular
    .module('angularBa', [
      'ngAria',
      'ui.router',
      'mm.foundation',
      'home',
      'dashboard'
    ]);

  angular
    .module('angularBa')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }

})();
