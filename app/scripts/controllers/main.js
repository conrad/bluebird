'use strict';

/**
 * @ngdoc function
 * @name bluebirdApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bluebirdApp
 */
angular.module('bluebirdApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
