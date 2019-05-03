import React from 'react';

import './WeatherDetails.css';

const WeatherDetails = ( props ) => {
	const weatherId = props.weatherId;
	const weatherConditions = props.weatherConditions;
	const temperature = (props.temperature - 273.15) * 9 / 5 + 32; // convert kelvin to fahrenheit
	const city = props.city;
	let description = '';

	for (let i = 0; i < weatherConditions.length; i++) {
		if (weatherId === weatherConditions[i].id) {
			description = weatherConditions[i].short_description;
		}
	}

	return (
		<div key={props.datetime} className="weather-details-container">
			<p className="city">{city}</p>
			<p className="description">{description}</p>
			<p className="temperature">{temperature.toFixed(0)}&#176;</p>
		</div>
	)
}

export default WeatherDetails;