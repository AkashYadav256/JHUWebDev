(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoryController', MainCategoryController);

MainCategoryController.$inject = ['items'];
function MainCategoryController(items) {
  var mcc = this;
  mcc.items = items;
  // console.log(mcc.items);
}

})();
