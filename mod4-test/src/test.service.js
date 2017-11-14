(function() {
  'use strict';
  angular.module("TestApp")
  .service("TestService",TestService);

  TestService.$inject = ['$http'];
  function TestService($http) {
    var service = this;
    service.getItems = function() {
      return $http.get('https://davids-restaurant.herokuapp.com/categories.json')
      .then(function(response) {
        return response.data;
      });
    };
  }
})();
