import React from 'react';
import './WeatherIcon.css';

const WeatherIcon = ( props ) => {
	let icon = <i className="wi wi-day-cloudy-gusts"></i>;
	switch (props.weather.main) {
		case "Clouds":
			
			break;
	
		default:
			break;
	}
	return (
		<div className="weather-icon-container">
			<i className="wi wi-day-cloudy-gusts"></i>
		</div>
	)
}

export default WeatherIcon;
