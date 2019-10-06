import React from 'react';
import './CalendarMonth.css'

class CalendarMonth extends React.Component {
		constructor(props) {
		super(props)
		this.state = {}
	}

	getMonthDates(year, month){
		let monthDates = [];
		let date = new Date(year,month,1);
		date.setDate(date.getDate() - date.getDay());
		monthDates.push(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
		for (let i=0; i<34; i++) {
			date.setDate(date.getDate() + 1);
			monthDates.push(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
		}
		let monthLastDay = new Date(year, month + 1, 0).getDate();
		for (let i=28; i<35; i++) {
			if(monthDates[i].getDate() === monthLastDay) {
				return monthDates
			}
		}
		for (let i=35; i<42; i++) {
			date.setDate(date.getDate() + 1);
			monthDates.push(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
		}

		return monthDates;
	}

	checkCurrentDate(date) {
		let dateNow = new Date();
		if(date.getFullYear() === dateNow.getFullYear() &
		   date.getMonth() === dateNow.getMonth() &
		   date.getDate() === dateNow.getDate()) {
			return true
		}
		else {
			return false
		}
	}

	render() {
		let weekDays = ['SUN','MON','TUE','WED','THU','FRI','SAT']
		let monthDates = this.getMonthDates(this.props.currentYearMonthDay.year, this.props.currentYearMonthDay.month);
		let calendarMonthBoxDay = [...Array(7*6).keys()].map( function(index) {
			if (index < 7) {
				return (
					<div key={index} className="calendar-month-box-day">
						<div>{weekDays[index]}</div>
						<div className={"calendar-month-date-circle " + (this.checkCurrentDate(monthDates[index]) ? 'calendar-month-date-circle-today' : '')}>{monthDates[index].getDate()}</div>
					</div>
				)
			}
			else if (monthDates[index] != null){
				return (
					<div key={index} className="calendar-month-box-day">
						<div className={"calendar-month-date-circle " + (this.checkCurrentDate(monthDates[index]) ? 'calendar-month-date-circle-today' : '')}>{monthDates[index].getDate()}</div>
					</div>
				)
			}
			else {
				return null
			}
		},this);

		return (
			<div>
				<div className="calendar-month-wrapper">
					{calendarMonthBoxDay}
				</div>
			</div>
		);
	}
}

export default CalendarMonth;