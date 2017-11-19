(function() {
  "use strict";

  angular.module('public')
  .controller("MyInfoController", MyInfoController);

  MyInfoController.$inject = ["SignupService","$http","ApiPath"];
  function MyInfoController(SignupService,$http,ApiPath) {
    var infoCtrl = this;
    var service = SignupService;
    infoCtrl.user = service.user;
    infoCtrl.basePath = ApiPath;
    infoCtrl.getMenuData = function() {
      return $http.get(ApiPath + "/menu_items/" + infoCtrl.user.favorite.toUpperCase() + ".json")
      .then(function(response) {
        infoCtrl.user.data = response.data;
        return response.data;
      });
    };
    if (infoCtrl.user) {
      infoCtrl.getMenuData();
    }
  }
})();
