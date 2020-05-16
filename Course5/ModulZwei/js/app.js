(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyControllerFun)
  .controller('AlreadyBoughtController', AlreadyBoughtControllerFun)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyControllerFun.$inject = ["ShoppingListCheckOffService"];
  function ToBuyControllerFun(ShoppingListCheckOffService) {
    var buy = this;
    buy.itemsToBuy = ShoppingListCheckOffService.toBuy;
    //buy.itemsBought = ShoppingListCheckOffService.doneBuying;
    buy.itemBought = function(idx) {
      ShoppingListCheckOffService.itemBought(idx);
    }
  }

  AlreadyBoughtControllerFun.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtControllerFun(ShoppingListCheckOffService) {
    var bought = this;
    //bought.itemsToBuy = ShoppingListCheckOffService.toBuy;
    bought.itemsBought = ShoppingListCheckOffService.doneBuying;
  }

  function ShoppingListCheckOffService () {
    var service = this;
    service.toBuy = [
      {
        name: "Cookies",
        quantity: 10
      },
      {
        name: "Muffins",
        quantity: 5
      },
      {
        name: "Chocolates",
        quantity: 10
      },
      {
        name: "Burgers",
        quantity: 5
      },
      {
        name: "Cakes",
        quantity: 2
      }
    ];
    service.doneBuying = [];

    service.itemBought = function(idx) {
      service.doneBuying.push(service.toBuy[idx]);
      service.toBuy.splice(idx, 1);
      console.log(service.doneBuying);
      console.log(service.toBuy);
    }


  }


})();
