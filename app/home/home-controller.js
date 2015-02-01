(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl($scope) {
    $scope.ctrlName = 'HomeCtrl';
    $scope.name = 'Amanda Elderbrook';
  }

})();
