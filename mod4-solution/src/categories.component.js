(function() {
  "use strict";

  angular.module("data")
  .component("categories", {
    templateUrl: 'src/menuapp/categories.template.html',
    bindings: {
      categories: '<'
    }

  });
})();
