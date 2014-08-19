console.log("called controllers.js");

var prototypeAppControllers = angular.module('prototypeAppControllers', []);

prototypeAppControllers.controller('MainCtrl', function($scope) {

  $scope.initMap = function() {
    var mapOptions = {
      zoom: 15,
      center: new google.maps.LatLng(-34.397, 150.644)
    };

    var map = new google.maps.Map(angular.element(document.getElementById('map-canvas')),
        mapOptions);
    };

  $scope.loadScript = function() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
        'callback=initialize';
    document.body.appendChild(script);
  };

  //window.onload = loadScript;
  $scope.loadScript();
  });