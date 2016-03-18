var app = angular.module("FruitVeggiesApp", []);
app.controller("AppCrtl", ["$scope", function($scope){

	
	$scope.fruitVeggies = fruit.concat(vegetables);

	$scope.fruitColumn = [];

	$scope.vegetablesColumn = [];


	$scope.moveToFruits = function(idx){
		$scope.fruitColumn.push($scope.fruitVeggies[idx]);
		$scope.fruitVeggies.splice(idx,1);
		$scope.checkGame();
	}

	$scope.moveToVegetables = function(idx){
		$scope.vegetablesColumn.push($scope.fruitVeggies[idx]);
		$scope.fruitVeggies.splice(idx,1);
		$scope.checkGame();
	}

	$scope.moveToFruitVeggiesFromFruit = function(idx){
		$scope.fruitVeggies.push($scope.fruitColumn[idx]);
		$scope.fruitColumn.splice(idx,1);
		$scope.checkGame();
	}

	$scope.moveToFruitVeggiesFromVege = function(idx){
		$scope.fruitVeggies.push($scope.vegetablesColumn[idx]);
		$scope.vegetablesColumn.splice(idx,1);
		$scope.checkGame();
	}

	$scope.game = function(type, idx){
		if($scope.fruitVeggies.length == 0 ){
			if(type == 'veg'){
				if(vegetables.indexOf($scope.vegetablesColumn[idx]) === -1 ){
					return true;
				} else {
					return false;
				}
			}
			if(type == 'fruit'){
				if(fruit.indexOf($scope.fruitColumn[idx]) === -1){
					return true;
				} else {
					return false;
				}
			}
		}
	};

	$scope.checkGame = function(idx){
		if($scope.fruitVeggies == 0){
			for(var i=0; i < $scope.fruitColumn.length; i++){
				//checks to see if fruit is in the orginal fruit array, if the fruit is in the original fruit array it will return 1,2,3
				// if something is checked that is not in the fruit array it will return -1
				if(fruit.indexOf($scope.fruitColumn[i]) == -1){
					return false
				}
			}
			for(var i=0; i < $scope.vegetablesColumn.length; i++){
				if(vegetables.indexOf($scope.vegetablesColumn[i]) == -1){
					return false
				}
			} 
			alert("Winner!!!!!");
		}
	};



	
	


console.log('App Started');
console.log('Fruit count', fruit.length);
console.log('Veggie count', vegetables.length);

}]);