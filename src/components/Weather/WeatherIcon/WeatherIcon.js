import React from 'react';
import './WeatherIcon.css';

const WeatherIcon = ( props ) => {
	const currentWeather = props.weather;
	const weatherConditions = props.weatherConditions;
	// let icon = <i className="wi wi-day-cloudy-gusts"></i>;
	let classes = '';

	weatherConditions.map( condition => {
		if (currentWeather.id === condition.id) {
			classes = condition.day_icon_class;
			return;
		}
	});
	
	console.log(classes);
	return (
		<div className="weather-icon-container">
			<i className={`wi ${classes}`}></i>
		</div>
	)
}

export default WeatherIcon;
