import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import weatherConditions from './weatherConditions.js';

import SearchZip from './components/SearchZip/SearchZip.js';
import Weather from './components/Weather/Weather.js';

class App extends Component {
	state = {
		zipCode: '',
		weatherConditions: weatherConditions,
		weather: null,
		hourlyWeather: null
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
					this.setState({
						weather: currentRes.data,
						hourlyWeather: hourlyRes.data
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
					hourlyWeather={this.state.hourlyWeather} />
			)
		};

		return (
			<div className="app">
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
