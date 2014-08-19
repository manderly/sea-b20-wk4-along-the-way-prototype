'use strict';

angular.module('prototypeApp', [
  'ngRoute'
]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/index', {templateUrl: 'app/partials/index.html'});
    $routeProvider.when('/home', {templateUrl: 'app/partials/home.html'});
    $routeProvider.when('/map', {templateUrl: 'app/partials/map.html'});
    $routeProvider.when('/filters', {templateUrl: 'app/partials/filters.html'});
  }]);