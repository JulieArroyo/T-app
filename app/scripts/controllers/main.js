'use strict';

/**
 * @ngdoc function
 * @name tAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tAppApp
 */
angular.module('tAppApp')
  .controller('MainCtrl', function ($scope,tweets,$localStorage) {
    $scope.tweets = tweets.get({
      widgetId: '626935840199999488'
    }).success(function(data){
      $scope.tweets = data.tweets;
    });

    $scope.saveTweet = function(tweets){
      if($localStorage.savedTweets){
        $localStorage.savedTweets.push(tweets);
      }else{
        $localStorage.savedTweets=[tweets];
      }
    };
  });
