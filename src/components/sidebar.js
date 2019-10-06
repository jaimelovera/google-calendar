import React from 'react';
import './SideBar.css';

/* This will hold the sidebar that appears when the hanburger button is pressed. As of now that button has no functionality
 * and ony serves as a placeholder to help look like google calendar.
 * TO-DO: add sidebar/hamburgerbutton functionality. */
function SideBar(props) {
	return (
		<div className="sidebar">
			<h1>Hello from SideBar</h1>
		</div>
	);
}

export default SideBar;