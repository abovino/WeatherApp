import React, { Component } from 'react';
import './App.css';
import weatherConditions from './weatherConditions.js';

import SearchZip from './components/SearchZip/SearchZip.js';
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
		} else if (zipCode.length > 5){
			return;
		} 
		else if (!Number(zipCode)) {
			// return, do nothing 
			return;
		}
		// set the zipCode state and pass a callback function to check if state.zipCode.length is > 5, if so fire api requests
		this.setState({
			zipCode: zipCode
		}, () => {
			if (zipCode.length === 5) {
				this.getWeather(this.state.zipCode).then( ({currentWeather, hourlyWeather, timeZone}) => {
					const sunrise = currentWeather.sys.sunrise; // sunrise in unix time
					const sunset = currentWeather.sys.sunset; // sunset in unix time
					const currentTime = currentWeather.dt; // current weather station unix time
					const timeZoneName = timeZone.zoneName; 
					let isLightOut = false;

					if (currentTime > sunrise && currentTime < sunset) {
						isLightOut = true;
					}

					this.setState({
						isLightOut: isLightOut,
						weather: currentWeather,
						hourlyWeather: hourlyWeather,
						sunrise: sunrise,
						sunset: sunset,
						timeZone: timeZoneName,
					});
				});
			}
		});
	}

	async getWeather(zipCode) {
		const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
		const TIME_ZONE_API_KEY = process.env.REACT_APP_TIME_ZONE_API_KEY;
		const currentWeatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${WEATHER_API_KEY}`);
		const hourlyWeatherRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&appid=${WEATHER_API_KEY}`);

		if (currentWeatherRes.status === 200 && hourlyWeatherRes.status === 200) {
			const currentWeather = await currentWeatherRes.json();
			const hourlyWeather = await hourlyWeatherRes.json();
			const timeZoneRes = await fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=${TIME_ZONE_API_KEY}&format=json&by=position&lat=${currentWeather.coord.lat}&lng=${currentWeather.coord.lon}`);

			if (timeZoneRes.status === 200) {
				const timeZone = await timeZoneRes.json();
				return ({
					currentWeather: currentWeather,
					hourlyWeather: hourlyWeather,
					timeZone: timeZone,
				});
			};

		} else {
			throw new Error('Weather not found'); // Do better error handling
		};
	};

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
