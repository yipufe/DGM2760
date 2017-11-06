/*jslint browser:true */
'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

function loadWeather() {
	var zip = document.getElementById('zip').value;
	if(zip === '') { zip = '84120'}

	var conditionsPath = 'http://api.wunderground.com/api/28716c14171b6755/conditions/q/'+zip+'.json';
	var forecastPath = 'http://api.wunderground.com/api/28716c14171b6755/forecast/q/'+zip+'.json';

	weatherConditions.open('GET', conditionsPath, true);
	weatherConditions.responseType = 'text';
	weatherConditions.send(null);

	// GET THE FORECARST
	weatherForecast.open('GET', forecastPath, true);
	weatherForecast.responseType = 'text'; 
	weatherForecast.send();	
}

// GET THE CONDITIONS
//KEY: 28716c14171b6755

weatherConditions.onload = function() {
    if (weatherConditions.status === 200){
        cObj = JSON.parse(weatherConditions.responseText); 
        console.log(cObj);

        document.getElementById('location').innerHTML = cObj.current_observation.display_location.full;
        document.getElementById('weather').innerHTML = cObj.current_observation.weather;
        document.getElementById('temperature').innerHTML = cObj.current_observation.temp_f;
    } //end if
}; //end function











weatherForecast.onload = function() {
if (weatherForecast.status === 200){
	fObj = JSON.parse(weatherForecast.responseText);
	console.log(fObj);
  
    document.getElementById('desc').innerHTML = fObj.forecast.txt_forecast.forecastday[0].fcttext;

	document.getElementById('r1c1').innerHTML = fObj.forecast.simpleforecast.forecastday[1].date.weekday;
	document.getElementById('r2c1').innerHTML = fObj.forecast.simpleforecast.forecastday[2].date.weekday;
	document.getElementById('r3c1').innerHTML = fObj.forecast.simpleforecast.forecastday[3].date.weekday;
	
	document.getElementById('r1c3').innerHTML = fObj.forecast.simpleforecast.forecastday[1].high.fahrenheit+"°";
	document.getElementById('r2c3').innerHTML = fObj.forecast.simpleforecast.forecastday[2].high.fahrenheit+"°";
	document.getElementById('r3c3').innerHTML = fObj.forecast.simpleforecast.forecastday[3].high.fahrenheit+"°";
	
	document.getElementById('r1c4').innerHTML = fObj.forecast.simpleforecast.forecastday[1].low.fahrenheit+"°";
	document.getElementById('r2c4').innerHTML = fObj.forecast.simpleforecast.forecastday[2].low.fahrenheit+"°";
	document.getElementById('r3c4').innerHTML = fObj.forecast.simpleforecast.forecastday[3].low.fahrenheit+"°";

	document.getElementById("r1c2").src = fObj.forecast.simpleforecast.forecastday[1].icon_url;
	document.getElementById("r2c2").src = fObj.forecast.simpleforecast.forecastday[2].icon_url;
	document.getElementById("r3c2").src = fObj.forecast.simpleforecast.forecastday[3].icon_url;

} //end if
}; //end function


loadWeather();