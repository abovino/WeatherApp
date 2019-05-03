import React from 'react';

import './HourlyWeather.css';

const HourlyWeather = ( props ) => {
	const weatherConditions = props.weatherConditions;

	let hours = props.hourlyWeather.list.map( (hour, index) => {
		// Include only the next 24 hours
		if (index < 8) {
			const time = new Date(hour.dt * 1000).toLocaleString('en-US', { 
				timeZone: props.timeZone,
				hour: '2-digit'
			}).toLowerCase();

			let iconClasses = '';

			for (let i = 0; i < weatherConditions.length; i++) {
				if (hour.weather[0].id === weatherConditions[i].id) {
					if (props.isLightOut) {
						iconClasses = weatherConditions[i].day_icon_class;
						break;
					}
					iconClasses = weatherConditions[i].night_icon_class;
					break;
				}
			}

			return (
				<tr key={hour.dt} className="hour">
					<td>{time}</td>
					<td>{((hour.main.temp - 273.15) * 9 / 5 + 32).toFixed(0)}&#176;</td>
					<td><i className={`wi ${iconClasses}`}></i></td>
				</tr>
			)
		}
	});
	
	return (
		<div className="hourly-container">
			<table className="hourly-table">
				<tbody>
					{hours}
				</tbody>	
			</table>
		</div>
	)
}

export default HourlyWeather;