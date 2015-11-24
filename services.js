// SERVICES

weatherApp.service('cityService', function() {

  this.city = 'Portland, OR';

});

weatherApp.service('weatherService', ['$resource', function($resource) {
  this.GetWeather = function(city, days) {
    var appid = 'f857b7ab2bf18470438f14cd1da0781f';
    var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } } );
    return weatherAPI.get({ appid: appid, q: city, cnt: days });
  };
}]);
