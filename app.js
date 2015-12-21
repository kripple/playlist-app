// App declaration
var myApp = angular.module('myApp', [])

// Controller declaration
.controller('mainController', ['$scope', function($scope) {

    $scope.greeting = 'Hello World!';

    // create a storage object to hold your songs
    $scope.songs = [];

    // model your song object to have a title and an artist
    var songModel = {title: "", artist: ""}

    // write a function to initialize a new song object
    $scope.initNewSong = function() {
      $scope.newSong = angular.copy(songModel);
    }

    // write a function to save the new song
    $scope.saveNewSong = function() {
      $scope.songs.push(angular.copy($scope.newSong)); // a post to my server, then a get from my server
      delete $scope.newSong;
    }

    // write a function to cancel the song creation process
    $scope.cancelNewSong = function() {
      delete $scope.newSong;
    }

}])

// Modified from: https://amitgharat.wordpress.com/2013/06/08/the-hitchhikers-guide-to-the-directive/
// Custom directive declaration
.directive('playlist', function() {
  return {
    restrict: 'ECMA',
    link: function(scope, element, attrs) {
      var img = document.createElement('img');
      img.src = 'http://bit.ly/1OchrJu';
      img.style.width = "10em";
      img.style.paddingBottom = "9px";
      img.style.margin = "40px 0 20px";
 
      // directives as comment
      if (element[0].nodeType === 8) {
        element.replaceWith(img);
      } else {
        element[0].appendChild(img);            
      }
    }
  };
});





