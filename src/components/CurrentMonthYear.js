import React from 'react';

class CurrentMonthYear extends React.Component {
	constructor(props) {
		super(props)
	}

	/* This function will return the current month plus year when in month view. When in week view
	 * it will return either the month, or the months in that week plus the year. */
	getMonthToDisplay() {
		/* Array of month strings to display if days in week are all from the same month. */
		let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
		/* Array of month ranges to display when dates in week are from multiple months. */
		let doubleMonths = ['Jan - Feb','Feb - Mar','Mar - Apr','Apr - May','May - Jun','Jun - Jul','Jul - Aug','Aug - Sep','Sep - Oct','Oct - Nov','Nov - Dec','Dec - Jan']
		let monthsInWeek = []
		if (this.props.currentView === "week") {
			let currentDate = new Date(this.props.currentYear,this.props.currentMonth,this.props.currentDay);
			
			/* Save the current month to be able to compare to the month of the next date.. */
			let previousMonth = currentDate.getMonth();
			monthsInWeek.push(previousMonth);
			/* Move day to the next day. */
			currentDate.setDate(currentDate.getDate() + 1);
			for(let i =0; i<6; i++) {
				if (currentDate.getMonth() !== previousMonth) {
					monthsInWeek.push(currentDate.getMonth());
				}
				previousMonth = currentDate.getMonth();
				currentDate.setDate(currentDate.getDate() + 1);
			}
			/* If only one month exists in the week. */
			if (monthsInWeek.length === 1) {
				return months[monthsInWeek[0]] + " " + this.props.currentYear;
			}
			/* If the week contains days in two months. */
			else {
				return doubleMonths[monthsInWeek[0]] + " " + this.props.currentYear;
			}
		}
		/* Else if currentView is month. */
		else {
			return months[this.props.currentMonth] + " " + this.props.currentYear;
		}
	}

	render() {
		return (
			<h1>{this.getMonthToDisplay()}</h1>
		);
	}
}

export default CurrentMonthYear