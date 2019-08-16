import React from 'react';
import './SearchZip.css';

const SearchZip = ( props ) => {
	return (
		<form className="search-container" onSubmit={(e) => props.handleSubmit(e)}>
			<input
				type="search"
				className="search"
				placeholder="Zip Code"
				value={props.zipCode} 
				onChange={props.searchChangeHandler} />
				<button type='submit' className='fas fa-search search-btn'></button>
		</form>
	)
}

export default SearchZip;