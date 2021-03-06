import React from 'react';
import './WeatherIcon.css';

const WeatherIcon = ( props ) => {
	const currentWeather = props.weather;
	const weatherConditions = props.weatherConditions;
	let classes = '';
	
	for (let i = 0; i < weatherConditions.length; i++) {
		if (currentWeather.id === weatherConditions[i].id) {
			if (props.isLightOut) {
				classes = weatherConditions[i].day_icon_class;
				break;
			}
			classes = weatherConditions[i].night_icon_class;
			break;
		}
	}
	
	return (
		<div className="weather-icon-container">
			<i className={`wi ${classes}`}></i>
		</div>
	)
}

export default WeatherIcon;
