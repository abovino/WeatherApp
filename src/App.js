import React, { Component } from 'react';
import './App.css';
import API from './api.js';

import SearchZip from './components/SearchZip.js';

class App extends Component {
	state = {
		zipCode: '',
		weather: {}
	}

	searchChangeHandler = (e) => {
		let zipCode = e.target.value;
		this.setState({
			zipCode: zipCode
		}, () => {
			if (zipCode.length === 5) {
				const url = `https://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode},us&appid=2b7618456915076d8232a8ff55d6f5f5`;
				API.get(url).then( response => {
						this.setState({
							weather: response.data
						})
					}).catch( error => {
						console.log(error); // Handle errors eventually
				});
			}
		});
	}

	render() {
		return (
			<div className="app">
				<SearchZip 
					zipCode={this.state.zipCode}
					searchHandler={this.searchHandler}
					searchChangeHandler={this.searchChangeHandler} />
			</div>
		);
	}
}

export default App;
