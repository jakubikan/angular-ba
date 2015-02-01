(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:TestTwoCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('TestTwoCtrl', TestTwoCtrl);

  function TestTwoCtrl($scope) {
    var vm = this;
    vm.ctrlName = 'TestTwoCtrl';
    $scope.title = 'bla';
  }

})();
