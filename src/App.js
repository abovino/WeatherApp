import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import weatherConditions from './weatherConditions.js';

import SearchZip from './components/SearchZip/SearchZip.js';
import Weather from './components/Weather/Weather.js';

class App extends Component {
	state = {
		zipCode: '',
		isLightOut: true,
		weatherConditions: weatherConditions,
		weather: null,
		hourlyWeather: null,
		sunrise: null,
		sunset: null,
	};

	searchChangeHandler = (e) => {
		let zipCode = e.target.value;
		// set the zipCode state and pass a callback function to check if state.zipCode.length is > 5, if so fire api requests
		this.setState({
			zipCode: zipCode
		}, () => {
			if (zipCode.length === 5) {
				const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode},us&appid=2b7618456915076d8232a8ff55d6f5f5`;
				const hourlyWeatherUrl  = `http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zipCode},us&appid=2b7618456915076d8232a8ff55d6f5f5`;

				axios.all([
					axios.get(currentWeatherUrl),
					axios.get(hourlyWeatherUrl)
				])
				.then(axios.spread((currentRes, hourlyRes) => {
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
					});
				}));
			}
		});
	};

	render() {
		let weather = <div></div>;
		
		// if this.state.weather is not null
		if (this.state.weather) {
			weather = (
				<Weather 
					weatherConditions={this.state.weatherConditions}
					datetime={this.state.weather.dt}
					weather={this.state.weather}
					hourlyWeather={this.state.hourlyWeather}
					isLightOut={this.state.isLightOut}
					sunrise={this.state.sunrise}
					sunset={this.state.sunset} />
			)
		};

		return (
			<div className={this.state.isLightOut ? 'app':'app dark'}>
				<SearchZip
					zipCode={this.state.zipCode}
					searchHandler={this.searchHandler}
					searchChangeHandler={this.searchChangeHandler} />
				{weather}
			</div>
		);
	}
}

export default App;
