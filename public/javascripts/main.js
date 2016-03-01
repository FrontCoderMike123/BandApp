var bandApp = angular.module('bandApp', ['ui.router','ngSanitize','ngAnimate']);

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

bandApp.controller('mainCtrl',['$scope','$anchorScroll','$location',function($scope,$anchorScroll,$location){
    $scope.goToTop = function(){
      $location.hash('header');
      $anchorScroll();
    };

    links = document.querySelectorAll(".backgrounds a");
    artists = document.querySelectorAll("#bandWrapper a");
    images = document.querySelectorAll('#bandWrapper li');
    var body = document.querySelector("body");

    window.onload = function() {
  if (localStorage) {
    artists.addEventListener('click',function(){
      var back = document.querySelector("body");
      localStorage.setItem('body', back);
    });

    artists.addEventListener('click', function() {
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

for(var i = 0; i<artists.length; i++) {
    artists[i].addEventListener('click',setBG,false);
}

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
    $scope.albums = bands.data.Albums;
    $scope.firstSongs = bands.data.Albums[0].Songs;
    $scope.secondSongs = bands.data.Albums[1].Songs;
    $scope.thirdSongs = bands.data.Albums[2].Songs;
    $scope.forthSongs = bands.data.Albums[3].Songs;
    $scope.fifthSongs = bands.data.Albums[4].Songs;
    /*$scope.songs = bands.data.Albums.Songs;
    console.log($scope.songs);*/
    //Un comment above to see that there was no other way... for me to reach the mongo DB... see for yourself please
    //THIS IS MUUUUCH CLEANER THAN BEFORE.... BUT AS YOU CAN SEE. IM STILL HAVING ISSUES GETTING THE 
    //SONGS BECAUSE OF THE WAY THEY'RE "treed" TOGETHER....
    //MUCH BETTER THOUGH LOL
  });
}]);