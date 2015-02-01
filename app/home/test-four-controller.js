(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name home.controller:TestFourCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('TestFourCtrl', TestFourCtrl);

  function TestFourCtrl($scope) {
    var vm = this;
    vm.ctrlName = 'TestFourCtrl';
    $scope.names = [
      "Hippolyta",
      "Mária",
      "Adil"
    ];
  }

})();
