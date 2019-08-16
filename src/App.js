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
		currentWeather: null,
		hourlyWeather: null,
		sunrise: null,
		sunset: null,
    timeZone: null,
    isError: false,
	};

	searchChangeHandler = (e) => {
    let zipCode = e.target.value;
    // Regex test to make sure user only enters number
    if (/^[0-9\b]+$/.test(zipCode) || zipCode.length === 0) {
      this.setState({
        zipCode
      });
    }
  }
  
  handleSubmit = async (e) => {
		e.preventDefault();
		if (this.state.zipCode.length < 1) {
			return;
		}
    this.getWeather(this.state.zipCode).then(({ currentWeather, hourlyWeather, timeZoneData }) => {
      const sunrise = currentWeather.sys.sunrise; // sunrise in unix time
      const sunset = currentWeather.sys.sunset; // sunset in unix time
      const currentTime = currentWeather.dt; // current weather station unix time
      const timeZone = timeZoneData.zoneName; 
      let isLightOut = false;

      if (currentTime > sunrise && currentTime < sunset) {
        isLightOut = true;
      }

      this.setState({
        isLightOut,
        currentWeather,
        hourlyWeather,
        sunrise,
        sunset,
        timeZone,
        isError: false,
      })
    }).catch(err => {
      this.setState({
        isError: true
      })
    })
  }

	async getWeather(zipCode) {
		const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const TIME_ZONE_API_KEY = process.env.REACT_APP_TIME_ZONE_API_KEY;
    const openWeatherApiUrl = 'https://api.openweathermap.org/data/2.5'
    const currentWeatherRes = await fetch(`${openWeatherApiUrl}/weather?zip=${zipCode},us&appid=${WEATHER_API_KEY}`);
    const hourlyWeatherRes = await fetch(`${openWeatherApiUrl}/forecast?zip=${zipCode},us&appid=${WEATHER_API_KEY}`);
    
    if (currentWeatherRes.status === 200 && hourlyWeatherRes.status === 200) {
			const currentWeather = await currentWeatherRes.json();
			const hourlyWeather = await hourlyWeatherRes.json();
			const timeZoneRes = await fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=${TIME_ZONE_API_KEY}&format=json&by=position&lat=${currentWeather.coord.lat}&lng=${currentWeather.coord.lon}`);

			if (timeZoneRes.status === 200) {
				const timeZoneData = await timeZoneRes.json();
				return ({
					currentWeather,
					hourlyWeather,
					timeZoneData,
				});
			};

		}
	};

	render() {
		let weather = <div></div>;
		
    // if this.state.weather is not null
    if (this.state.isError) {
      weather = (
        <div className="error-container">
          <h2>Zip code not found</h2>
          <p>Please try again</p>
        </div>
      )
    } else if (this.state.currentWeather) {
			weather = (
					<div key={this.state.currentWeather.dt} className="desktop-container">
						<div>
							<WeatherDetails
								datetime={this.state.currentWeather.dt}
								city={this.state.currentWeather.name}
								temperature={this.state.currentWeather.main.temp}
								weatherId={this.state.currentWeather.weather[0].id}
								weatherConditions={this.state.weatherConditions} />
							<WeatherIcon 
								weather={this.state.currentWeather.weather[0]}
								weatherConditions={this.state.weatherConditions}
								isLightOut={this.state.isLightOut} />
						</div>
						<div>
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
						handleSubmit={this.handleSubmit}
						searchChangeHandler={this.searchChangeHandler} />
					{weather}
				</div>
			</div>
		);
	}
}

export default App;
