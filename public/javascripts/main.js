var bandApp = angular.module('bandApp', ['ui.router','ngSanitize']);

bandApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$stateProvider.state('bands',{
		url: '/bands',
		templateUrl: 'pages/bands.ejs',
		controller: 'mainCtrl'
	});
	$stateProvider.state('albums',{
		url: '/bands',
		templateUrl: 'pages/bands.ejs',
		controller: 'albumCtrl'
	});
	$stateProvider.state('details', {
  		url: '/details/{bandId}',
  		templateUrl: 'pages/details.ejs',
  		controller: 'detailsCtrl'
	});
	/*$stateProvider.state('albums', {
  		url: '/albums/{album1ID}',
  		templateUrl: 'pages/albums.ejs',
  		controller: 'album1Ctrl'
	});*/
	$urlRouterProvider.otherwise('/bands');
}]);

bandApp.controller('mainCtrl',['$scope','$http',function($scope,$http){
	$http.get('/bands').then(function(bands){
		$scope.bands = bands.data;
	});
}]);

bandApp.controller('albumCtrl',['$scope','$http',function($scope,$http){
	$http.get('/albums').then(function(albums){
		$scope.albums = albums.data;
	});
}]);


bandApp.controller('songCtrl',['$scope','$http',function($scope,$http){
	$http.get('/songs').then(function(songs){
		$scope.songs = songs.data;
	});
}]);

/*bandApp.controller('album1Ctrl', ['$scope','$http','$stateParams',function($scope,$http,$stateParams){
	var ID = $stateParams.album1ID;
	$http.get('/album1/'+ID).then(function(albums){
		$scope.SongName = albums.data.Title;
	});
}]);*/

bandApp.controller('detailsCtrl', ['$scope','$http','$stateParams', function($scope,$http,$stateParams) {
  var ID = $stateParams.bandId;
  $http.get('/details/'+ID).then(function(bands) {
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
    $scope.album1Name = bands.data.Albums[0].Name;
    $scope.album2Name = bands.data.Albums[1].Name;
    $scope.album3Name = bands.data.Albums[2].Name;
    $scope.album4Name = bands.data.Albums[3].Name;
    $scope.album5Name = bands.data.Albums[4].Name;
    $scope.album1Year = bands.data.Albums[0].Year;
    $scope.album2Year = bands.data.Albums[1].Year;
    $scope.album3Year = bands.data.Albums[2].Year;
    $scope.album4Year = bands.data.Albums[3].Year;
    $scope.album5Year = bands.data.Albums[4].Year;
    //OOPS
  });
}]);