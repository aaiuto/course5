(function() {
  "use strict";
  angular.module("data")
  .component("items", {
    templateUrl: 'src/menuapp/items.template.html',
    bindings: {
      items: '<'
    }

  });

})();
