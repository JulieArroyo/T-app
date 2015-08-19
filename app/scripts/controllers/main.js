'use strict';

/**
 * @ngdoc function
 * @name tAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tAppApp
 */
angular.module('tAppApp')
  .controller('MainCtrl', function ($scope,tweets,$localStorage,$sce) {
    $scope.tweets = tweets.get({
      widgetId: '626935840199999488'
    }).success(function(data){
      $scope.tweets = data.tweets;
      $scope.donTweets = [ ];
      for(var i = 0 ; i < $scope.tweets.length ; i++ ){
        if($scope.tweets[i].author.nickName=='@realDonaldTrump'){
          $scope.donTweets.push($scope.tweets[i]);
        }
      }
      $scope.refresh();
    });
    $scope.refresh = function(){
      var randomNum = Math.floor(Math.random() * ($scope.donTweets.length - 0));

      $scope.displayTweet = $scope.donTweets[randomNum].html;
      $scope.displayTweet = $sce.trustAsHtml($scope.displayTweet);
    }



    $scope.saveTweet = function(tweets){
      if($localStorage.savedTweets){
        $localStorage.savedTweets.push(tweets);
      }else{
        $localStorage.savedTweets=[tweets];
      }
    };
  });
