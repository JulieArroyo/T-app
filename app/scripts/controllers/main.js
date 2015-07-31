'use strict';

/**
 * @ngdoc function
 * @name tAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tAppApp
 */
angular.module('tAppApp')
  .controller('MainCtrl', function ($scope,tweets) {
    $scope.tweets = tweets.get({
      widgetId: '626935840199999488'
    }).success(function(data){
      $scope.tweets = data.tweets;
    });
  });
