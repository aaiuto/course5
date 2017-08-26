(function () {
  'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.result = "";
    $scope.check = function () {
      if ($scope.textContent === '' || $scope.textContent === undefined) {
        $scope.result = "Please enter data first";
      }
      else {
        var itemQuantity = $scope.textContent.split(',').length;
        if (itemQuantity <= 0) {
          $scope.result = "Please enter data first";
        }
        else if (itemQuantity > 3) {
          $scope.result = "Too Much!";
        }
        else {
        $scope.result = "Enjoy!";
        }
      }
    };
  }
})();
