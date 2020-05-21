(function () {
'use strict';

angular.module('public')
.controller('RegController', RegController);

RegController.$inject = ['menuItems', 'MenuService'];
function RegController(menuItems, MenuService) {
  var reg = this;
  reg.user = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    favitem: ""
  };
  // console.log(item);
  reg.login = "";
  reg.submit = function(sname) {
    // console.log(reg.firstname);
    // console.log(reg.lastname);
    // console.log(reg.favitem);
    // console.log(sname);
    var promise = MenuService.myService(sname);
    // console.log(promise);
    promise.then(function (response) {
      // console.log(response.data.menu);
      console.log(response);
      reg.login = "Your information has been saved.";
      MenuService.userData = reg.user;
      // if (response.menu_items.length != 0) {reg.login = "Login successful";}
      // else {reg.login = "No item with that ID found :(";}

    //   if (response.category == undefined){reg.login = "No item with that ID found :(";}
    //   else {reg.login = "Your information has been saved.";
    // MenuService.userData = reg.user;}
    })
    .catch(function (error){
      reg.login = "No item with that ID found :(";

    });
  }




  }

}  ) ();
