(function () {
'use strict';
	
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);


LunchCheckController.$inject = ['$scope', '$filter'];

function LunchCheckController($scope,$filter) {
    $scope.itemArray = "";
    $scope.message = "Please enter data first";

  $scope.checkInput = function() {
    if ($scope.itemArray.length == 0) {
      $scope.message = 'Please enter data first';
      return;
    } 
    else {
      var listItems = $scope.itemArray.split(',');
      
      if (listItems.length <= 3) {
        $scope.message = 'Enjoy!';
      }
      else {
        $scope.message = 'Too much!';
      }      
    }
  }
}

        
        
        
})();