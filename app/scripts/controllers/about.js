'use strict';

/**
 * @ngdoc function
 * @name bluebirdApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bluebirdApp
 */
angular.module('bluebirdApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
