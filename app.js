// MODULE

var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// ROUTES

weatherApp.config(function($routeProvider) {
  
  $routeProvider
  
  .when('/', {
    templateUrl: 'pages/home.htm',
    controller: 'homeController'
  })
  .when('/forecast', {
    templateUrl: 'pages/forecast.htm',
    controller: 'forecastController'
  });
  
});

// SERVICES

weatherApp.service('cityService', function() {
  
  this.city = 'Portland, OR';
  
});

// CONTROLLERS

weatherApp.controller('homeController', ['$scope', '$log', '$routeParams', 'cityService', function($scope, $log, cityService) {
  
  $scope.city = cityService.city;
  
  $scope.$watch('city', function() {
    cityService.city = $scope.city;
  });
  
}]);

weatherApp.controller('forecastController', ['$scope', '$log', '$resource', '$routeParams', 'cityService', function($scope, $log, $resource, $routeParams, cityService) {
  
  $scope.city = cityService.city;
  
  $scope.days = $routeParams.days || 2;
  
  $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } } );
  
  $scope.weatherAPI.appid = 'f857b7ab2bf18470438f14cd1da0781f';
  
  $scope.weatherResult = $scope.weatherAPI.get({ appid: $scope.weatherAPI.appid, q: $scope.city, cnt: $scope.days });
  
  // $log.info($scope.weatherResult);
  
  $scope.convertToFarenheit = function(degK) {
    
    return Math.round((degK* 1.8) - 459.67);
    
  };
  
  $scope.convertToCelsius = function(degK) {
    
    return Math.round(degK - 273.15);
    
  };
  
  $scope.convertToDate = function(dt) {
    
    return new Date(dt * 1000);
    
  };
  
}]);