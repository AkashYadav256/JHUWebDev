(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    template: "<div><a ui-sref = 'categories'>Click here to go to categories</a></div>"
  })
  .state('categories', {
    url: '/categories',
    templateUrl: 'main-categories.html',
    controller: "MainCategoryController as mcc",
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })
  .state('itemsState', {
    url: '/items-state/{itemId}',
    templateUrl: 'main-itemsstate.html',
    controller: "MainCategoryControllerItem as mcci",
    resolve: {
      item: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getAllCategories()
        .then(function (items) {
          //console.log(items[$stateParams.itemId].short_name);
          return items[$stateParams.itemId].short_name;
        });
      }]
    }
  })
}

})();
