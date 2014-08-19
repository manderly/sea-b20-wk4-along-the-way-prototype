angular.module('prototypeApp', [
  'ngRoute',
  'prototypeAppControllers'
]).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/index', {templateUrl: 'app/partials/index.html'});
    $routeProvider.when('/home', {templateUrl: 'app/partials/home.html'});
    $routeProvider.when('/map', {templateUrl: 'app/partials/map.html', controller:'MainCtrl'});
    $routeProvider.when('/filters', {templateUrl: 'app/partials/filters.html'});
  }]);