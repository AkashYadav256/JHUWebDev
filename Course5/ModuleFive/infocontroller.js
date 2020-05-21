(function () {
'use strict';

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['MenuService', 'ApiPath'];
function InfoController(MenuService, ApiPath) {
  var inf = this;
  inf.user = MenuService.userData;
  inf.path = ApiPath;

  if (inf.user) {
    var promise = MenuService.myService(inf.user.favitem);

    promise.then(function (response) {
      inf.des = response.description;
      inf.name = response.name;
      inf.short_name = response.short_name;
  })
}



  }

}  ) ();
