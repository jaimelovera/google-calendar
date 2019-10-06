import React from 'react';
import './CalendarLogo.css';

/* Using this only since my project is an attempt to replicate some of google calendars functionalities. */
function CalendarLogo(props) {
	return (
		<div className='calendar-logo'>
			{/* Taken from google.calendar.com */}
			<img className="google-logo" src={"https://www.gstatic.com/images/branding/product/2x/calendar_48dp.png"} alt="" />
			<h1 className="logo-text">Calendar</h1>
		</div>
	);
}

export default CalendarLogo