import React from 'react';

class CurrentMonthYear extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.getMonthToDisplay = this.getMonthToDisplay.bind(this);
	}

	getMonthToDisplay() {
		let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
		let doubleMonths = ['Jan - Feb','Feb - Mar','Mar - Apr','Apr - May','May - Jun','Jun - Jul','Jul - Aug','Aug - Sep','Sep - Oct','Oct - Nov','Nov - Dec','Dec - Jan']
		let monthsInWeek = []
		if (this.props.currentView === "week") {
			let currentDate = new Date(this.props.currentYear,this.props.currentMonth,this.props.currentDay);
			
			let previousMonth = currentDate.getMonth();
			monthsInWeek.push(previousMonth);
			currentDate.setDate(currentDate.getDate() + 1);
			for(let i =0; i<6; i++) {
				if (currentDate.getMonth() !== previousMonth) {
					monthsInWeek.push(currentDate.getMonth());
				}
				previousMonth = currentDate.getMonth();
				currentDate.setDate(currentDate.getDate() + 1);
			}
			if (monthsInWeek.length === 1) {
				return months[monthsInWeek[0]] + " " + this.props.currentYear;
			}
			else {
				return doubleMonths[monthsInWeek[0]] + " " + this.props.currentYear;
			}
		}
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