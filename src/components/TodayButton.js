import React from 'react';

import './TodayButton.css';

function TodayButton(props) {
	let todaysDate = new Date();
	todaysDate.setDate(todaysDate.getDate() - todaysDate.getDay());
	return (
		<button className="today-button"
				onClick={() => props.changeDate(todaysDate.getFullYear(),todaysDate.getMonth(),todaysDate.getDate())}>
			Today
		</button>
	);
}

export default TodayButton