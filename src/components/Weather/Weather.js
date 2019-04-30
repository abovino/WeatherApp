import React from 'react';
import './Weather.css';

const Weather = ( props ) => {
	console.log(props.weather.weather[0].description);
	let description = props.weather.weather[0].description;
	let temperature = (props.weather.main.temp - 273.15) * 9 / 5 + 32;
	let city = props.weather.name;
	return (
		<div className="weather-container">
			<p className="city">{city}</p>
			<p className="description">{description}</p>
			<p className="temperature">{temperature.toFixed(0)}&#176;</p>
		</div>
	)
}

export default Weather;