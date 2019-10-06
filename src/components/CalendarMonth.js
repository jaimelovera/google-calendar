import React from 'react';
import './CalendarMonth.css'

class CalendarMonth extends React.Component {
		constructor(props) {
			super(props)
	}

	/* Generates a ordered list of the dates to display for the current month. */
	getMonthDates(year, month){
		let monthDates = [];
		let date = new Date(year,month,1);
		/* Returns the first day of the week. */
		date.setDate(date.getDate() - date.getDay());
		/* Adds the first date to the array of dates. */
		monthDates.push(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
		/* For the next 34 days add them to the array. */
		for(let i=0; i<34; i++) {
			date.setDate(date.getDate() + 1);
			monthDates.push(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
		}
		/* Gets the last day of the current month. */
		let monthLastDay = new Date(year, month + 1, 0).getDate();
		/* If the last day is already in the last row then return this list.
		 * If its not in this list then we must add one more row of dates to have the full month. */
		for(let i=28; i<35; i++) {
			if(monthDates[i].getDate() === monthLastDay) {
				return monthDates
			}
		}
		/* If above statement did not return list then generate the dates of the nest week. */
		for(let i=35; i<42; i++) {
			date.setDate(date.getDate() + 1);
			monthDates.push(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
		}
		return monthDates;
	}

	/* Checks if the date is today. */
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
		/* Generates a array of 6 rows of dates, but will only fill what is necessary. Null values will not expand the grid. */
		let calendarMonthBoxDay = [...Array(7*6).keys()].map( function(index) {
			/* For the first week we must include the day abreviation along with the date. */
			if (index < 7) {
				return (
					<div key={index} className="calendar-month-box-day">
						<div>{weekDays[index]}</div>
						<div className={"calendar-month-date-circle " + (this.checkCurrentDate(monthDates[index]) ? 'calendar-month-date-circle-today' : '')}>{monthDates[index].getDate()}</div>
					</div>
				)
			}
			/* For the rest dates just return the date number. But if the element in the array is null then dont do this. */
			else if (monthDates[index] != null){
				return (
					<div key={index} className="calendar-month-box-day">
						<div className={"calendar-month-date-circle " + (this.checkCurrentDate(monthDates[index]) ? 'calendar-month-date-circle-today' : '')}>{monthDates[index].getDate()}</div>
					</div>
				)
			}
			/* If the array element is null then there is no date to add because we didnt need the extra row. 
			 * So return Null so the days grid is not expanded to an extra row (since it is not needed). */
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