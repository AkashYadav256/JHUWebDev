(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoryControllerItem', MainCategoryControllerItem);

MainCategoryControllerItem.$inject = ['item', 'MenuDataService'];
function MainCategoryControllerItem(item, MenuDataService) {
  var mcci = this;
  // console.log(item);
  var promise = MenuDataService.getItemsForCategory(item);
  promise.then(function (items) {
    mcci.itemsstate = items;
    console.log(mcci.itemsstate);
  })

  // console.log(mcc.items);
}

})();
