import React from 'react';

const SearchZip = ( props ) => {
	return (
		<div>
			<input type="text" value={props.zipCode} onChange={props.searchChangeHandler}/>
			<button onClick={props.searchHandler}>Search</button>
		</div>
	)
}

export default SearchZip;