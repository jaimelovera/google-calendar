import React from 'react';
import './CalendarWeek.css';

class CalendarWeek extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {}
	}

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
		   dateNowHours*7 + dateNowDay === hour ) {
			return true
		}
		else {
			return false
		}
	}

	checkCurrentDate(date) {
		let currentDate = new Date(this.props.currentYearMonthDay.year,this.props.currentYearMonthDay.month,this.props.currentYearMonthDay.day);
		let dateNow = new Date();
		let dateNowDate = dateNow.getDate();
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
		let weekDates = [this.props.currentYearMonthDay.day]

		let currentDate = new Date(this.props.currentYearMonthDay.year,this.props.currentYearMonthDay.month,this.props.currentYearMonthDay.day);
		for(let i=0; i<6; i++) {
			currentDate.setDate(currentDate.getDate() + 1);
			weekDates.push(currentDate.getDate());
		}
		
		let headerRow = weekDays.map( function(weekDay,index) {
			if(this.checkCurrentDate(weekDates[index])) {
				return (
					<div key={index} className="calendar-header-box">
						<div className="calendar-header-box-day calendar-header-box-day-today">{weekDay}</div>
						<div className="calendar-header-box-date"><div className="calendar-date-circle-today">{weekDates[index]}</div></div>
					</div>
				)
			}
			else {
				return (
					<div key={index} className="calendar-header-box">
						<div className="calendar-header-box-day">{weekDay}</div>
						<div className="calendar-header-box-date"><div className="calendar-date-circle">{weekDates[index]}</div></div>
					</div>
				)
			}
		},this);

		let hoursInWeek = [...Array(24*7).keys()]
		let hours = hoursInWeek.map( function(hour) {
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

		return (
			<div>
				<div className="calendar-grid-container-header">
					{headerRow}
				</div>
				<div className="calendar-grid-container-hours">
					{hours}
				</div>
			</div>
		);
	}
}

export default CalendarWeek;