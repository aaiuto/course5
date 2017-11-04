(function() {
  "use strict";

  angular.module("MenuApp")
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/blahblahblah/home.template.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/blahblahblah/categories.template.html',
      controller: "",
      resolve: {
        items: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('items', {
      url: '/item-detail/{itemId}',
      templateUrl: '/src/blahblahblah/items.template.html',
      controller: "",
      resolve: {
        item: ['$stateParams', 'MenuDataService',
          function ($stateParams, MenuDataService) {
            return MenuDataService.getAllCategories()
              .then(function (items) {
                return items[$stateParams.itemID];
              });
          }]
      }
    });

  }


})();
