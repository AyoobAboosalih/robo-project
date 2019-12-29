import React from 'react';
import './Search.css';




const SearchBox = ({SearchBoxMode,searchField, searchChange})=>{
	return (
		
		<input className={`${SearchBoxMode}1`}
		type = "search" 
		placeholder="Enter your Name here"
		onChange ={searchChange}/>
		)

}


export default SearchBox;


// "pa3 ba b--green bg-lightest-blue" 