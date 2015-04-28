'use strict';

/**
 * @ngdoc overview
 * @name bluebirdApp
 * @description
 * # bluebirdApp
 *
 * Main module of the application.
 */
angular
  .module('bluebirdApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    // 'ngRoute',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    // For unmatched urls, redirect to /main
    $urlRouterProvider.otherwise('/main');

    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'partials/main.html'
      })
      .state('signUp', {
        url: '/signUp',
        templateUrl: 'partials/signUp.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'partials/about.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'partials/contact.html'
      })
  });







// The following is the orig ngRoute implementation:
  // .config(function ($routeProvider) {
  //   $routeProvider
  //     .when('/', {
  //       templateUrl: 'views/main.html',
  //       controller: 'MainCtrl'
  //     })
  //     .when('/about', {
  //       templateUrl: 'views/about.html',
  //       controller: 'AboutCtrl'
  //     })
  //     .otherwise({
  //       redirectTo: '/'
  //     });
  // });
