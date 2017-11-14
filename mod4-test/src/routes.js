(function() {
  'use strict';
  angular.module("TestApp").config(RoutesConfig);
  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/home.template.html'
    })
    .state('test', {
      url: '/test',
      templateUrl: 'src/test.template.html',
      resolve: {
        items: ['TestService', function(TestService) {
          console.log(TestService.getItems());
          return TestService.getItems();
        }]
      }
    });
  }
})();
