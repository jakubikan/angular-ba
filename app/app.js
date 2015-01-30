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
    .module('polymerTest', [
      'ngAria',
      'ui.router',
      'mm.foundation',
      'home'
    ]);

  angular
    .module('polymerTest')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }

})();
