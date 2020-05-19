(function () {
'use strict';

angular.module('MenuApp')
.component('itemsstate', {
  templateUrl: 'itemsstate.html',
  bindings: {
    items: '<'
  }
});

})();
