import React from 'react';

class CalendarMonth extends React.Component {
		constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		return (
			<div>
				Hello from Calendar Month.
				<br />
				{this.props.currentYearMonthDay.year}
				<br />
				{this.props.currentYearMonthDay.month}
				<br />
				{this.props.currentYearMonthDay.day}
			</div>
		);
	}
}

export default CalendarMonth;