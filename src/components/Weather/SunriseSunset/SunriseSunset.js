import React from 'react';
import moment from 'moment-timezone';

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
						<td>{moment.unix(props.sunrise).tz(props.timeZone).format('h:mm a')}</td>
						<td>{moment.unix(props.sunset).tz(props.timeZone).format('h:mm a')}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default SunriseSunset;