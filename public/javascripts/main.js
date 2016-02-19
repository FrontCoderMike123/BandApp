var bandApp = angular.module('bandApp', ['ui.router','ngSanitize']);

bandApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('bands',{
		url: '/bands',
		templateUrl: 'pages/bands.ejs',
		controller: 'mainCtrl'
	});
	$stateProvider.state('details', {
  		url: '/details/{bandId}',
  		templateUrl: 'pages/details.ejs',
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
  var ID = $stateParams.bandId;
  $http.get('/details/'+ID).then(function(bands) {
  	console.log(bands.data.Name);//this gives me the object array...
  	$scope.bandName = bands.data.Name;
  	$scope.bandPic = bands.data.Photo;
  	$scope.bandBio = bands.data.Bio;
  	$scope.bandGenre = bands.data.Genre;
  	$scope.album1 = bands.data.Albums[0].Photo;
    $scope.album2 = bands.data.Albums[1].Photo;
    $scope.album3 = bands.data.Albums[2].Photo;
    $scope.album4 = bands.data.Albums[3].Photo;
    $scope.album5 = bands.data.Albums[4].Photo;
    $scope.album1ID = bands.data.Albums[0].ID;
    $scope.album2ID = bands.data.Albums[1].ID;
    $scope.album3ID = bands.data.Albums[2].ID;
    $scope.album4ID = bands.data.Albums[3].ID;
    $scope.album5ID = bands.data.Albums[4].ID;
  });
}]);