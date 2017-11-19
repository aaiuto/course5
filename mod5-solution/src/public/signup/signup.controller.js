(function() {
  "use strict";
  angular.module('public')
  .controller("SignupController", SignupController);

  SignupController.$inject = ["SignupService","$http","ApiPath"];
  function SignupController(SignupService, $http, ApiPath) {
    var signupCtrl = this;
    var service = SignupService;
    signupCtrl.submit = function() {
      return $http.get(ApiPath + "/menu_items/" + signupCtrl.user.favorite.toUpperCase() + ".json")
      .then(function (response) {
        signupCtrl.user.saved = true;
        service.user = signupCtrl.user;
        signupCtrl.valid = true;
      }, function (response) {
        signupCtrl.valid = false;
        service.user = null;
      });
    };
  }
})();
