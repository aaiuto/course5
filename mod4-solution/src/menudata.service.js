(function() {
  "use strict";

  angular.module("data")
  .service("MenuDataService", MenuDataService);

  MenuDataService.$inject = ['$q','$http','categories'];
  function MenuDataService($q, $http,categories) {
    var service = this;

    // service.getAllCategories = function() {
    //   var def = $q.defer();
    //   $http({
    //     method: "GET",
    //     url: "https://davids-restaurant.herokuapp.com/categories.json"
    //   }).then(function mySuccess(response) {
    //     //categories = response.data;
    //     def.resolve(response);
    //   });
    //   return def.promise;
    // };

    service.getAllCategories = function() {
      return $http({
          method: 'GET',
          url: 'https://davids-restaurant.herokuapp.com/categories.json'
      }).then(function(response) {
        console.log(response.data);
        return response.data;
      });
    };

    service.getItemsForCategory = function(categoryShortName) {
      var response = $http({
          method: "GET",
          url: "https://davids-restaurant.herokuapp.com/menu_items.json?category="
            + categoryShortName
      });
      return response;
    };
  }
})();
