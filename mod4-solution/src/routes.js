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
      templateUrl: 'src/menuapp/home.template.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuapp/categories.template.html',
      controller: "CategoriesController as catCtrl",
      resolve: {
        categories: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories().then(function(response) {
            console.log(response.data);
            return response.data;
          });
        }]
      }
    })
    // .state('items', {
    //   url: '/item-detail/{itemId}',
    //   templateUrl: '/src/menuapp/items.template.html',
    //   controller: "",
    //   resolve: {
    //     item: ['$stateParams', 'MenuDataService',
    //       function ($stateParams, MenuDataService) {
    //         return MenuDataService.getAllCategories()
    //           .then(function (items) {
    //             return items[$stateParams.itemID];
    //           });
    //       }]
    //   }
    // })
    ;

  }


})();
