import React from 'react';
import './Weather.css';

import WeatherIcon from './WeatherIcon/WeatherIcon.js';
import SunriseSunset from './SunriseSunset/SunriseSunset.js';
import HourlyWeather from './HourlyWeather/HourlyWeather.js';

const Weather = ( props ) => {
	const currentWeather = props.weather.weather[0];
	const weatherConditions = props.weatherConditions;
	const temperature = (props.weather.main.temp - 273.15) * 9 / 5 + 32; // convert kelvin to fahrenheit
	const city = props.weather.name;
	let description = '';

	// loop through all possible weather conditions and find matching weather id
	for (let i = 0; i < weatherConditions.length; i++) {
		if (currentWeather.id === weatherConditions[i].id) {
			description = weatherConditions[i].short_description
			break;
		}
	}

	return (
		<div key={props.datetime} className="weather-container">
			<p className="city">{city}</p>
			<p className="description">{description}</p>
			<p className="temperature">{temperature.toFixed(0)}&#176;</p>
			<WeatherIcon 
				weather={props.weather.weather[0]}
				weatherConditions={props.weatherConditions}
				isLightOut={props.isLightOut} />
			<SunriseSunset 
				sunrise={props.sunrise}
				sunset={props.sunset}
				timeZone={props.timeZone} />
			<HourlyWeather 
				hourlyWeather={props.hourlyWeather}
				weatherConditions={props.weatherConditions}
				isLightOut={props.isLightOut}
				timeZone={props.timeZone} />
		</div>
	)
}

export default Weather;
