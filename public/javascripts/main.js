var bandApp = angular.module('bandApp', ['ui.router','ngSanitize','ngAnimate']);

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
	$urlRouterProvider.otherwise('/bands');
}]);

bandApp.run(['$rootScope',function($rootScope){
  $rootScope.bands = [
    { _id:'56c646d4c1d11185dace1c8f', title: "/images/artists/metallica.jpg", Name: "Metallica" },
    { _id:'56c64872c1d11185dace1c90', title: "/images/artists/slayer.jpg", Name: "Slayer" },
    { _id:'56c64a5fc1d11185dace1c91', title: "/images/artists/judas.jpg", Name: "Judas Priest" },
    { _id:'56c64c2fc1d11185dace1c92', title: "/images/artists/lamb.jpg", Name: "Lamb of God" },
    { _id:'56c64e14c1d11185dace1c93', title: "/images/artists/led.jpg", Name: "Led Zeppelin" },
    { _id:'56c64f8dc1d11185dace1c94', title: "/images/artists/iron.jpg", Name: "Iron Maiden" },
    { _id:'56c65168c1d11185dace1c95', title: "/images/artists/avenged.jpg", Name: "Avenged Sevenfold" },
    { _id:'56c653ffc1d11185dace1c96', title: "/images/artists/disturbed.jpg", Name: "Disturbed" },
    { _id:'56c65682c1d11185dace1c97', title: "/images/artists/slipknot.jpg", Name: "Slipknot" },
    { _id:'56c657f9c1d11185dace1c98', title: "/images/artists/megadeth.jpg", Name: "Megadeth" }
  ];
}]);

bandApp.controller('mainCtrl',['$scope','$http',function($scope,$http){
    links = document.querySelectorAll(".backgrounds a");
    var body = document.querySelector("body");

    window.onload = function() {
  if (localStorage) {
    document.querySelectorAll(".backgrounds a").addEventListener('click', function() {
      var back = document.querySelector("body");
      localStorage.setItem('body', back);
    });
  }else{
    console.log('No LocalStorage for you!');
  }
}

    function setBG() {
    var target = this.id+'.jpg';
    localStorage.setItem('BG',target);
    displayStoredItems(target);
}

    function displayStoredItems(target) {
    if(localStorage.getItem('BG') !== null){
        var getBG = localStorage.getItem('BG');
        body.style.backgroundImage = "url('/images/backgrounds/"+target+"')";
    }
}

for(var i = 0; i<links.length; i++) {
    links[i].addEventListener('click',setBG,false);
}

}]);

bandApp.controller('albumCtrl',['$scope','$http',function($scope,$http){
	$http.get('/albums').then(function(albums){
		$scope.albums = albums.data;
	});
}]);

bandApp.controller('detailsCtrl', ['$scope','$http','$stateParams','$rootScope', function($scope,$http,$stateParams,$rootScope) {
  var ID = $stateParams.bandId;
  var index = parseInt($stateParams._id, 10);
  var record = $rootScope.bands[index - 1];
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
    //album 1
    $scope.album1Song1 = bands.data.Albums[0].Songs[0].Title;
    $scope.album1Song2 = bands.data.Albums[0].Songs[1].Title;
    $scope.album1Song3 = bands.data.Albums[0].Songs[2].Title;
    $scope.album1Song4 = bands.data.Albums[0].Songs[3].Title;
    $scope.album1Song5 = bands.data.Albums[0].Songs[4].Title;
    //album 2
    $scope.album2Song1 = bands.data.Albums[1].Songs[0].Title;
    $scope.album2Song2 = bands.data.Albums[1].Songs[1].Title;
    $scope.album2Song3 = bands.data.Albums[1].Songs[2].Title;
    $scope.album2Song4 = bands.data.Albums[1].Songs[3].Title;
    $scope.album2Song5 = bands.data.Albums[1].Songs[4].Title;
    //album 3
    $scope.album3Song1 = bands.data.Albums[2].Songs[0].Title;
    $scope.album3Song2 = bands.data.Albums[2].Songs[1].Title;
    $scope.album3Song3 = bands.data.Albums[2].Songs[2].Title;
    $scope.album3Song4 = bands.data.Albums[2].Songs[3].Title;
    $scope.album3Song5 = bands.data.Albums[2].Songs[4].Title;
    //album 4
    $scope.album4Song1 = bands.data.Albums[3].Songs[0].Title;
    $scope.album4Song2 = bands.data.Albums[3].Songs[1].Title;
    $scope.album4Song3 = bands.data.Albums[3].Songs[2].Title;
    $scope.album4Song4 = bands.data.Albums[3].Songs[3].Title;
    $scope.album4Song5 = bands.data.Albums[3].Songs[4].Title;
    //album 5
    $scope.album5Song1 = bands.data.Albums[4].Songs[0].Title;
    $scope.album5Song2 = bands.data.Albums[4].Songs[1].Title;
    $scope.album5Song3 = bands.data.Albums[4].Songs[2].Title;
    $scope.album5Song4 = bands.data.Albums[4].Songs[3].Title;
    $scope.album5Song5 = bands.data.Albums[4].Songs[4].Title;
    //OOPS
  });
}]);