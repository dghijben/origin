'use strict';

/**
 * @ngdoc function
 * @name translateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the translateApp
 */
angular.module('translateApp')
  .controller('MainCtrl', function ($scope) {
    // Yeoman part (for tests)
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.map = {
    	center: {
    		latitude: 35.6516515,
    		longitude: 139.7024949
    	},
    	zoom: 14,
    };
    $scope.marker = {
    	id: 0,
    	coords: {
    		latitude: 35.6516515,
    		longitude: 139.7024949
    	}
    };
    $scope.options = {
    	scrollwheel: false
    };

    $scope.showModal = false;
    $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;
    };

  })

  .directive('modal', function () {
    return {
      templateUrl: 'views/modal.html', 
      restrict: 'E',
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {

        scope.$watch(attrs.visible, function(value){
          if(value === true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });

      }
    };
  });