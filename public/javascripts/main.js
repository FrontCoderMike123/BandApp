var bandApp = angular.module('bandApp', ['ui.router','ngAnimate']);

bandApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('bands',{
		url: '/bands',
		templateUrl: 'views/list.html',
		controller: 'mainCtrl'
	});
	$stateProvider.state('details', {
  		url: '/details/{id}',
  		templateUrl: 'views/details.html',
  		controller: 'detailsCtrl'
	});
	$urlRouterProvider.otherwise('/bands');
}]);

bandApp.controller('mainCtrl',['$scope','$http',function($scope,$http){
	$http.get('/bands').then(function(bands){
		$scope.bands = bands.data;
	});
}]);

bandApp.controller('detailsCtrl', ['$scope','$http','$stateParams', function($scope,$http,$stateParams) {
  var ID = $stateParams.id;
  $http.get('/details/'+ID).then(function(bands) {
    $scope.Name = bands.data[$stateParams.id].Name;
    //console.log(ID); Properly spits out the RIGHT ID!!
  });
}]);