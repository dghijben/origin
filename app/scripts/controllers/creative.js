'use strict';

/**
 * @ngdoc function
 * @name angularTranslateApp.controller:CreativeCtrl
 * @description
 * # CreativeCtrl
 * Controller of the angularTranslateApp
 */
angular.module('translateApp')
  .controller('CreativeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
