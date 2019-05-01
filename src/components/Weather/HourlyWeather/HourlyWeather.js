import React from 'react';

const HourlyWeather = ( props ) => {
	let hours = props.hourlyWeather.list.map( (hour, index) => {
		if (index < 12) {
			return (
				<section>
					<span>{((hour.main.temp - 273.15) * 9 / 5 + 32).toFixed(0)}</span>
					<span>{hour.weather[0].main}</span>
				</section>
			)
		}
	})
	return (
		<div>
			{hours}
		</div>
	)
}

export default HourlyWeather;