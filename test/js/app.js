(function () {
  'use strict';
  angular.module('TestApp',[])
  .controller('TestController', TestController);

  TestController.$inject = ['$scope'];
  function TestController($scope) {
    $scope.test = "test text";
  }
})();
