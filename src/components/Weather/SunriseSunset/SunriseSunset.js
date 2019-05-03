import React from 'react';

import './SunriseSunset.css';

const SunriseSunset = ( props ) => {
	return (
		<div className="sun-container">
			<table>
				<tbody>
					<tr className="sun-icons">
						<td><i className="wi wi-sunrise"></i></td>
						<td><i className="wi wi-sunset"></i></td>
					</tr>
					<tr>
						<td>{
							new Date(props.sunrise * 1000).toLocaleString('en-us', {
								timeZone: props.timeZone,
								hour: '2-digit', 
								minute: '2-digit'
							})
						}</td>
						<td>{
							new Date(props.sunset * 1000).toLocaleString('en-us', {
								timeZone: props.timeZone, 
								hour: '2-digit', 
								minute: '2-digit'
							})
						}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default SunriseSunset;