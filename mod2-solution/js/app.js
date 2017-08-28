(function () {
  'use strict';
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var ctrl1 = this;
    ctrl1.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
    ctrl1.buy = function (index) {
      var item = ctrl1.toBuyItems[index];
      ShoppingListCheckOffService.buyItem(item);
      ShoppingListCheckOffService.checkoffItem(index);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var ctrl2 = this;
    ctrl2.boughtItems = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var boughtItems = [];
    var toBuyItems = [
      {
        name: "Ice Cream Pints", quantity: 3
      },
      {
        name: "Mangoes", quantity: 5
      },
      {
        name: "Bags of Kale", quantity: 2
      },
      {
        name: "Sweet Potatoes", quantity: 4
      },
      {
        name: "Oranges", quantity: 5
      }
    ];

    service.buyItem = function(item) {
      boughtItems.push(item);
    }
    service.checkoffItem = function(index) {
      toBuyItems.splice(index,1);
    };

    service.getBoughtItems = function() {
      return boughtItems;
    };

    service.getToBuyItems = function() {
      return toBuyItems;
    };
  }

})();
