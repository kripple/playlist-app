// App declaration
angular.module('myApp', [])

// Controller declaration
.controller('mainController', ['$scope', function($scope) {

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

}]);
