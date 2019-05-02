import React from 'react';
import './Weather.css';

import WeatherIcon from './WeatherIcon/WeatherIcon.js';
import HourlyWeather from './HourlyWeather/HourlyWeather.js';

const Weather = ( props ) => {
	const currentWeather = props.weather.weather[0];
	const temperature = (props.weather.main.temp - 273.15) * 9 / 5 + 32; // convert kelvin to fahrenheit
	const city = props.weather.name;
	let description = '';

	props.weatherConditions.map( condition => {
		if (currentWeather.id === condition.id) {
			description = condition.short_description;
		}
	})

	return (
		<div key={props.datetime} className="weather-container">
			<p className="city">{city}</p>
			<p className="description">{description}</p>
			<p className="temperature">{temperature.toFixed(0)}&#176;</p>
			<WeatherIcon 
				weather={props.weather.weather[0]}
				weatherConditions={props.weatherConditions} />
			<HourlyWeather 
				hourlyWeather={props.hourlyWeather}
				weatherConditions={props.weatherConditions} />
		</div>
	)
}

export default Weather;
