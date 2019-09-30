import React from 'react';

import CalendarWeek from './CalendarWeek';
import CalendarMonth from './CalendarMonth';

class Calendar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		let calendar;
		let currentYearMonthDay = {year:this.props.year,
								   month:this.props.month,
								   day:this.props.day}
		if(this.props.currentView === "week") {
			calendar = <CalendarWeek currentYearMonthDay={currentYearMonthDay} />;
		}
		if(this.props.currentView === "month") {
			calendar = <CalendarMonth currentYearMonthDay={currentYearMonthDay} />;
		}
		return (
			<div>
				{calendar}
			</div>
		);
	}
}

export default Calendar;