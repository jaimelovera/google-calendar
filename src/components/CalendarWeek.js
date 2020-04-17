import React from 'react';
import './CalendarWeek.css';

class CalendarWeek extends React.Component {
	
	constructor(props) {
		super(props)
	}

	/* Checks if the hour in the grid is the current hour to be able to appropriately mark it as current. */
	checkCurrentHour(hour) {
		let currentDate = new Date(this.props.currentYearMonthDay.year,this.props.currentYearMonthDay.month,this.props.currentYearMonthDay.day);
		let dateNow = new Date();
		let dateNowHours = dateNow.getHours();
		/* Used to get the closest hour to the current time. */
		if(dateNow.getMinutes() >= 30) {
			dateNowHours ++;
		}
		let dateNowDay = dateNow.getDay();
		dateNow.setDate(dateNow.getDate() - dateNow.getDay());

		if(currentDate.getFullYear() === dateNow.getFullYear() &
		   currentDate.getMonth() === dateNow.getMonth() &
		   currentDate.getDate() === dateNow.getDate() &
		   /* This math magic coresponds to the way my hour gris is setup. 
		    * Times 7 moves the pointer down the grid, while plus dateNowDay moves the pointer
		    * across the grid. */
		   dateNowHours * 7 + dateNowDay === hour ) {
			return true
		}
		else {
			return false
		}
	}

	/* Checks if date passed in is the current date of today. */
	checkCurrentDate(date) {
		let currentDate = new Date(this.props.currentYearMonthDay.year,this.props.currentYearMonthDay.month,this.props.currentYearMonthDay.day);
		let dateNow = new Date();
		let dateNowDate = dateNow.getDate();
		/* Gets the first day of the week of which date was passed in. */
		dateNow.setDate(dateNow.getDate() - dateNow.getDay());

		if(currentDate.getFullYear() === dateNow.getFullYear() &
		   currentDate.getMonth() === dateNow.getMonth() &
		   currentDate.getDate() === dateNow.getDate() &
		   date === dateNowDate) {
			return true
		}
		else {
			return false
		}
	}

	render() {
		let weekDays = ['SUN','MON','TUE','WED','THU','FRI','SAT']
		let currentDate = new Date(this.props.currentYearMonthDay.year,this.props.currentYearMonthDay.month,this.props.currentYearMonthDay.day);
		currentDate.setDate(currentDate.getDate() - currentDate.getDay());
		/* Initializes an array to store the dates in this week, and begins by adding the first date. */
		let weekDates = [currentDate.getDate()]
		/* Increments the day one at a time for the rest of the week, storing the date in the array while it loops. */
		for(let i=0; i<6; i++) {
			currentDate.setDate(currentDate.getDate() + 1);
			weekDates.push(currentDate.getDate());
		}
		/* This generates the header row to be used and indicates the current date. */
		let headerRow = weekDays.map( function(weekDay,index) {
			return (
				<div key={index} className="calendar-header-box">
					<div className={"calendar-header-box-day " + (this.checkCurrentDate(weekDates[index]) ? "calendar-header-box-day-today" : "")}>{weekDay}</div>
					<div className="calendar-header-box-date"><div className={"calendar-date-circle " + (this.checkCurrentDate(weekDates[index]) ? "calendar-date-circle-today" : "")}>{weekDates[index]}</div></div>
				</div>
			)
		},this);

		/* Creates a hourbox div 24*7 times, but creates a special one for the current hour. */
		let hours = [...Array(24*7).keys()].map( function(hour) {
				if(this.checkCurrentHour(hour)) {
					return (
						<div key={hour} className="calendar-hourBox calendar-hourBox-now">
							<div className="red-circle-now"></div>
						</div>
					)
				}
				else {
					return <div key={hour} className="calendar-hourBox"></div>
				}
			},this);

		/* Creates a div container for each hour in the day. */
		let timeLabelsArray = ['','1 AM','2 AM','3 AM','4 AM','5 AM','6 AM','7 AM','8 AM', '9 AM', '10 AM', '11 AM',
							   '12 PM','1 PM','2 PM','3 PM','4 PM','5 PM','6 PM','7 PM','8 PM', '9 PM', '10 PM', '11 PM']
		let timeLabels = timeLabelsArray.map( (timeLabel) => {
			return <div key={timeLabel} className="calendar-timeLabel">{timeLabel}</div>
		});


		return (
			<div>
				<div className="calendar-grid-container-wrapper1">
					<div className="calendar-grid-container-header-placeholder"></div>
					<div className="calendar-grid-container-header">
						{headerRow}
					</div>
				</div>
				<div className="calendar-grid-container-wrapper2">
					<div className="calendar-grid-container-timelabel">
						{timeLabels}
					</div>
					<div className="calendar-grid-container-hours">
						{hours}
					</div>
				</div>
			</div>
		);
	}
}

export default CalendarWeek;
