import React, { Component } from 'react';
import './App.css';
import API from './api.js';
import weatherConditions from './weatherConditions.js';

import SearchZip from './components/SearchZip/SearchZip.js';
import Weather from './components/Weather/Weather.js';

class App extends Component {
	state = {
		zipCode: '',
		weatherConditions: weatherConditions,
		weather: {
			coord: {
				lon: -74.64,
				lat: 40.87
			},
			weather: [
				{
					id: 804,
					main: "Clouds",
					description: "overcast clouds",
					icon: "04n"
				}
			],
			base: "stations",
			main: {
				temp: 283.52,
				pressure: 1026,
				humidity: 57,
				temp_min: 282.04,
				temp_max: 285.37
			},
			visibility: 16093,
			wind: {
				speed: 3.1,
				deg: 160
			},
			clouds: {
				all: 90
			},
			dt: 1556587425,
			sys: {
				type: 1,
				id: 4686,
				message: 0.0107,
				country: "US",
				sunrise: 1556531979,
				sunset: 1556581919
			},
			id: 420025548,
			name: "Paterson",
			cod: 200
		}
	}
	
	searchChangeHandler = (e) => {
		let zipCode = e.target.value;
		this.setState({
			zipCode: zipCode
		}, () => {
			if (zipCode.length === 5) {
				const url = `https://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode},us&appid=2b7618456915076d8232a8ff55d6f5f5`;
				API.get(url).then(response => {
					console.log(response.data);
					this.setState({
						weather: response.data
					})
				}).catch(error => {
					console.log(error); // Handle errors eventually
				});
			}
		});
	}

	render() {
		console.log(this.state);
		return (
			<div className="app">
				<SearchZip
					zipCode={this.state.zipCode}
					searchHandler={this.searchHandler}
					searchChangeHandler={this.searchChangeHandler} />
				<Weather 
					datetime={this.state.weather.dt}
					weather={this.state.weather} />
			</div>
		);
	}
}

export default App;
