# AngularJS Weather Single Page App (SPA) from Anthony Alicea's Udemy Angular course.
## - with modifications -

This is an [Angular.js](https://angularjs.org/) framework SPA taken from [Anthony Alicea's](http://www.anthonypalicea.com) course on [Angular at Udemy](https://www.udemy.com/learn-angularjs/learn/#/). It pulls a weather data object returned in JSON from [Open Weather Map](http://openweathermap.org/).

I have made a number of modification to it, using Bootstrap classes and the [Angular ngClass directive](https://docs.angularjs.org/api/ng/directive/ngClass).

* I have added in a function in the controllers.js, accessed in the weatherReport.htm directive template that computes the temperature in both ℉ (Farenheit) and ℃ (Celsius).
* I also pull the weather objects main & description in weatherReport.htm from the returned weather object and put those in each of the results.
* I added two rows of Bootstrap buttons to choose how many days forecast you are viewing for the city's weather forecast in forecast.htm, with ng-class substituting out correctly with the 'btn-primary' or 'btn-diabled' depending if the button has been chosen or not.

For my education and edification purposes only, not for sale and giving credit for original code to [Anthony Alicea's](http://www.anthonypalicea.com).
