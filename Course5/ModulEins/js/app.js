(function () {
  'use strict';
  angular.module('LunchCheck', []).controller('LunchCheckController', myFun);
  myFun.$inject = ["$scope"];
  function myFun($scope) {
    $scope.textBox = "";
    $scope.message = "";
    $scope.checkLunch = function() {
      //var x = $scope.textBox.split(',').length;
      if ($scope.textBox == "") {
        $scope.message = "Please enter data first";
      }
      else {
        var x = 0;
        for (var sr of $scope.textBox.split(',')) {
          sr = sr.trim();
          //console.log(sr.length);
          if (sr != "") {
            x += 1;
          }
        }
        if (x <= 3) {
          $scope.message = "Enjoy!";
        }
        else {
          $scope.message = "Too much!";
        }
      }
    };
  }
})();
