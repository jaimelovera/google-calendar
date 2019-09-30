import React from 'react';

class CalendarWeek extends React.Component {
		constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div>
				Hello from Calendar Week.
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

export default CalendarWeek;