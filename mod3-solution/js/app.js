(function() {
  'use strict';

  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        onRemove: '&',
        nothing: '&',
        initialized: '<'
      },
      controller: NarrowItDownController,
      controllerAs: 'ctrl',
      bindToController: true
    };

  return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;
    ctrl.found = [];
    ctrl.initialized = false;
    ctrl.searchMenu = function() {
      var term = ctrl.term;
      ctrl.initialized = true;
      if (term === undefined || term === null || term === "") {

        ctrl.found = [];
        return;
      }
      ctrl.found = MenuSearchService.getMatchedMenuItems(term);

    };
    ctrl.removeItem = function(itemIndex) {
      if (ctrl.found.length === 1) {
        ctrl.initialized = false;
      }
      ctrl.found.splice(itemIndex,1);
    };
    ctrl.nothingFound = function() {
      if ((ctrl.term === undefined || ctrl.term === null
        || ctrl.term === "" || ctrl.found.length === 0)
        && ctrl.initialized === true
        ) {
        return true;
      }
      return false;
    };
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http) {
    var service = this;
    service.getMatchedMenuItems = function(searchTerm) {
      var foundItems = [];
      $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"

      }).then(function (result) {
        var data = result.data.menu_items;
        // process result and only keep items that match

        for (var i = 0; i < data.length; i++) {

          if (data[i].description.toLowerCase().
          indexOf(searchTerm.toLowerCase()) !== -1) {
            foundItems.push(data[i]);
          }
        }
      });
      return foundItems;
    }
  }
})();
