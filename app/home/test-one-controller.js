(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:TestOneCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('TestOneCtrl', TestOneCtrl);

  function TestOneCtrl($scope) {
    var vm = this;
    vm.ctrlName = 'TestOneCtrl';
    $scope.title = 'hugo';
  }

})();
