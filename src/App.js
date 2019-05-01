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
		weather: null
	};
	
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
	};

	render() {
		let weather = <div></div>;
		
		// if this.state.weather is not null
		if (this.state.weather) {
			weather = (
				<Weather 
					weatherConditions={this.state.weatherConditions}
					datetime={this.state.weather.dt}
					weather={this.state.weather} />
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
