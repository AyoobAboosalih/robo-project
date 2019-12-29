import React from 'react';
import './Card.css';

const BigCard = ({BigCardMode,yourname})=>{
	if (yourname === ''){
		return(
			<div className={`${BigCardMode}2  grow`}>
			<h2>Find your Robo image here!</h2>
			</div>
			)
	}
	return(
		<div className={`${BigCardMode}2  grow`}>
		<img className="grow" src={`https://robohash.org/${yourname}?300x300`} alt="this is your robo" />
		<p>Dear {yourname}, I am your Robo! Right click and Save me.</p>
		</div>
		);
}

export default BigCard;



// bg-light-green dib br3 grow shadow-5 tc pa4 ma2 bw1 mh10