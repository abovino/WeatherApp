import React, { Component } from 'react';
import './App.css';

import SearchZip from './components/SearchZip.js';

class App extends Component {
	state = {
		zipCode: '',
		weather: null
	}

	searchChangeHandler = (e) => {
		this.setState({ zipCode: e.target.value });
	}

	searchHandler = (e) => {
		console.log(e.target);
	}

	render() {
		return (
			<div className="app">
				<SearchZip zipCode={this.state.zipCode} searchHandler={this.searchHandler} />
			</div>
		);
	}
}

export default App;
