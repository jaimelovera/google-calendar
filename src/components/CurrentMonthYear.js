import React from 'react';

function CurrentMonthYear(props) {
	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	return (
		<h1>{months[props.currentMonth]} {props.currentYear}</h1>
	);
}

export default CurrentMonthYear