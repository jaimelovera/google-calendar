import React from 'react';

import './HamburgerButton.css';

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