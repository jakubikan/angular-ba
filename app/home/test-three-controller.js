(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:TestThreeCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('TestThreeCtrl', TestThreeCtrl);

  function TestThreeCtrl($scope) {
    var vm = this;
    vm.ctrlName = 'TestThreeCtrl';
    $scope.title = 'otto';
  }

})();
