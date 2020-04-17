import React from 'react';

import CalendarWeek from './CalendarWeek';
import CalendarMonth from './CalendarMonth';

/* This component simply directs the calendar to the correct calendar view that is being asked for. */
class Calendar extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		let calendar;
		let currentYearMonthDay = {year:this.props.year,month:this.props.month,day:this.props.day}
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
