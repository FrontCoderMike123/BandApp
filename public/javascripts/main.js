var bandApp = angular.module('bandApp', ['ui.router']);

bandApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('list',{
		url: '/list',
		templateUrl: 'views/list.html', //we are still in the public folder!
		controller: 'mainCtrl'
	});
	$stateProvider.state('details', {
  		url: '/details/:bandId',
  		templateUrl: 'views/details.html',
  		controller: 'detailsCtrl'
	});
	$urlRouterProvider.otherwise('/list');
}]);

bandApp.controller('mainCtrl',['$scope','$http',function($scope,$http){
	$http.get('/bands').then(function(bands){
		$scope.bands = bands.data;
	});
}]);

bandApp.controller('detailsCtrl', ['$scope','$http','$stateParams', function($scope,$http,$stateParams) {
  var id = $stateParams.bandId;
  $http.get('/details/'+id).then(function(bands) {
    $scope.Name = bands[$stateParams.bandId].Name;
    console.log($scope.Name);
  });
}]);