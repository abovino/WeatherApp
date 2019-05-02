import React from 'react';

import './HourlyWeather.css';

const HourlyWeather = ( props ) => {
	let hours = props.hourlyWeather.list.map( (hour, index) => {
		if (index < 24) {
			const time = new Date(hour.dt * 1000).toLocaleString(undefined, { hour: '2-digit' }).toLowerCase();
			let iconClasses = '';

			for (let i = 0; i < props.weatherConditions.length; i++) {
				if (hour.weather[0].id === props.weatherConditions[i].id) {
					iconClasses = props.weatherConditions[i].day_icon_class;
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
	})
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