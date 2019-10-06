import React from 'react';
import './HamburgerButton.css';

/* This has no functionality implemented. It is only a placeholder to help emulate the look of google calendar. */
function HamburgerButton(props) {
	return (
		<button className='hamburger-button'>
			<div className='hamburger-button-spacer'></div>
			<div className='hamburger-button-line'></div>
			<div className='hamburger-button-line'></div>
			<div className='hamburger-button-line'></div>
			<div className='hamburger-button-spacer'></div>
		</button>
	);
}

export default HamburgerButton