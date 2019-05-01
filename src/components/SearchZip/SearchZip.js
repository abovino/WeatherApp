import React from 'react';
import './SearchZip.css';

const SearchZip = ( props ) => {
	return (
		<div className="search-container">
			<input 
				type="search"
				className="search"
				placeholder="Zip Code"
				value={props.zipCode} 
				onChange={props.searchChangeHandler} />
		</div>
	)
}

export default SearchZip;