import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import weatherConditions from './weatherConditions.js';

import SearchZip from './components/SearchZip/SearchZip.js';
import Weather from './components/Weather/Weather.js';
import WeatherDetails from './components/Weather/WeatherDetails/WeatherDetails.js';
import WeatherIcon from './components/Weather/WeatherIcon/WeatherIcon.js';
import SunriseSunset from './components/Weather/SunriseSunset/SunriseSunset.js';
import HourlyWeather from './components/Weather/HourlyWeather/HourlyWeather.js';


class App extends Component {
	state = {
		zipCode: '',
		isLightOut: true,
		weatherConditions: weatherConditions,
		weather: null,
		hourlyWeather: null,
		sunrise: null,
		sunset: null,
		timeZone: null,
	};

	searchChangeHandler = (e) => {
		let zipCode = e.target.value;

		// If user deletes all chars in input box then setstate to e.target.value IE: ''
		// Else if user tries to enter a non-numeric value then return and do nothing
		if (zipCode < 1) {
			this.setState({ zipCode: zipCode})
			return;
		} else if (!Number(zipCode)) {
			// return, do nothing 
			return;
		}
		// set the zipCode state and pass a callback function to check if state.zipCode.length is > 5, if so fire api requests
		this.setState({
			zipCode: zipCode
		}, () => {
			if (zipCode.length === 5) {
				// Get the current and hourly weather
				const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode},us&appid=2b7618456915076d8232a8ff55d6f5f5`;
				const hourlyWeatherUrl  = `http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zipCode},us&appid=2b7618456915076d8232a8ff55d6f5f5`;
				axios.all([
					axios.get(currentWeatherUrl),
					axios.get(hourlyWeatherUrl)
				])
				.then(axios.spread((currentRes, hourlyRes) => {
					// use the lat/lon coords. returned in previous request to get the timezone
					const latitude = currentRes.data.coord.lat;
					const longitude = currentRes.data.coord.lon;
					const timezoneUrl = `http://api.timezonedb.com/v2.1/get-time-zone?key=8E0SAIB5Z6L8&format=json&by=position&lat=${latitude}&lng=${longitude}`;
					let timeZone = '';

					// Send request and in the promise call the handleSearchStateChange method
					// 	and pass all 3 responses to update the state
					axios.get(timezoneUrl).then( response => {
						timeZone = response.data.zoneName;
						this.handleSearchStateChange(currentRes, hourlyRes, timeZone);
					})

				}));
			}
		});
	};

	// Receives 3 GET request responses to update state
	handleSearchStateChange(currentRes, hourlyRes, timeZone) {
		const sunrise = currentRes.data.sys.sunrise // sunrise in unix time
		const sunset = currentRes.data.sys.sunset // sunset in unix time
		const currentTime = currentRes.data.dt // current weather station unix time
		let isLightOut = false;

		if (currentTime > sunrise && currentTime < sunset) {
			isLightOut = true;
		}

		this.setState({
			isLightOut: isLightOut,
			weather: currentRes.data,
			hourlyWeather: hourlyRes.data,
			sunrise: sunrise,
			sunset: sunset,
			timeZone: timeZone,
		});
	}

	render() {
		let weather = <div></div>;
		
		// if this.state.weather is not null
		if (this.state.weather) {
			weather = (
					<div key={this.state.weather.dt} className="desktop-container">
						<div className="left">
							<WeatherDetails
								datetime={this.state.weather.dt}
								city={this.state.weather.name}
								temperature={this.state.weather.main.temp}
								weatherId={this.state.weather.weather[0].id}
								weatherConditions={this.state.weatherConditions} />
							<WeatherIcon 
								weather={this.state.weather.weather[0]}
								weatherConditions={this.state.weatherConditions}
								isLightOut={this.state.isLightOut} />
						</div>
						<div className="right">
							<SunriseSunset 
								sunrise={this.state.sunrise}
								sunset={this.state.sunset}
								timeZone={this.state.timeZone} />
							<HourlyWeather 
								hourlyWeather={this.state.hourlyWeather}
								weatherConditions={this.state.weatherConditions}
								isLightOut={this.state.isLightOut}
								timeZone={this.state.timeZone} />
						</div>
					</div>
			)
		};

		return (
			<div className={this.state.isLightOut ? 'app':'app dark'}>
				<div className="main-container">
					<SearchZip
						zipCode={this.state.zipCode}
						searchHandler={this.searchHandler}
						searchChangeHandler={this.searchChangeHandler} />
					{weather}
				</div>
			</div>
		);
	}
}

export default App;
